import { HOUSE_GUIDE_DATA, PROPERTY_DATA, RECOMMENDATIONS_DATA } from './constants';
import { Recommendation, HouseGuideData, Language } from './types';

export interface ChatMessage {
    id: string;
    role: 'user' | 'assistant';
    content: string;
    timestamp: Date;
}

// Helper to flatten house guide data for searching
const getHouseGuideContext = (lang: Language): string => {
    const data = HOUSE_GUIDE_DATA[lang];
    let context = "HOUSE APPLIANCES:\n";
    data.appliances.forEach(app => {
        context += `- ${app.name} (${app.id}): ${app.instruction}\n`;
    });

    context += "\nCLEANING POLICY:\n";
    context += `${data.cleaning.policy}\n`;
    data.cleaning.schedules.forEach(schedule => {
        context += `\n${schedule.title}:\n`;
        schedule.frequency.forEach(freq => context += `- ${freq}\n`);
    });
    if (data.cleaning.notes.length > 0) {
        context += "\nNOTES:\n";
        data.cleaning.notes.forEach(note => context += `${note}\n`);
    }

    context += "\nWASTE RECYCLING:\n";
    data.waste.forEach(item => {
        context += `- ${item.name}: ${item.description}\n`;
    });

    context += "\nSAFETY EQUPMENT:\n";
    data.safety.forEach(item => {
        context += `- ${item.name}: Located at ${item.location}\n`;
    });

    if (data.info) {
        context += "\nUSEFUL INFO:\n";
        // Map items to their values/descriptions
        Object.entries(data.info.items).forEach(([key, label]) => {
            // @ts-ignore
            const desc = data.info.descriptions[key];
            if (desc) {
                context += `- ${label}: ${desc}\n`;
            }
        });
    }

    return context;
};

// Helper to flatten recommendations for searching
const getRecommendationsContext = (lang: Language): string => {
    const data = RECOMMENDATIONS_DATA[lang];
    let context = "LOCAL RECOMMENDATIONS:\n";
    data.forEach(rec => {
        context += `- ${rec.title} (${rec.categoryId}): ${rec.description}. Host Tip: ${rec.hostTip || ''}. Map URL: ${rec.mapUrl}\n`;
    });
    return context;
};

// Helper to flatten property info
const getPropertyContext = (): string => {
    let context = "PROPERTY INFO:\n";
    context += `Emergency Phone: ${PROPERTY_DATA.emergencyPhone}\n`;
    context += `Host Phone: ${PROPERTY_DATA.hostPhone}\n`;
    context += `Wi-Fi: See home screen.\n`;

    context += "IMPORTANT LOCATIONS:\n";
    context += `- Hospital: ${PROPERTY_DATA.locations.hospital.name}. Map: ${PROPERTY_DATA.locations.hospital.mapUrl}\n`;
    PROPERTY_DATA.locations.pharmacies.forEach(p => {
        context += `- Pharmacy: ${p.name} in ${p.address}. Map: ${p.mapUrl}\n`;
    });
    PROPERTY_DATA.locations.gasStations.forEach(g => {
        context += `- Gas Station: ${g.name} in ${g.address}. Map: ${g.mapUrl}\n`;
    });
    PROPERTY_DATA.locations.evStations.forEach(e => {
        context += `- EV Charging: ${e.name} in ${e.address}. Map: ${e.mapUrl}\n`;
    });
    const bus = PROPERTY_DATA.locations.busStop;
    context += `- Bus Stop: ${bus.name} in ${bus.address}. Map: ${bus.mapUrl}\n`;

    return context;
};

export const buildSystemContext = (lang: Language = 'en'): string => {
    return [
        `You are a helpful AI assistant for a guest house called "Sleep HAIbeat".`,
        `Your goal is to help guests by answering questions based strictly on the context provided below.`,
        `IMPORTANT INSTRUCTIONS:`,
        `- Keep responses concise and easy to read. avoid long blocks of text.`,
        `- Use bullet points, spacing, and bold text to organize information.`,
        `- When mentioning a location (restaurant, park, etc.), ALWAYS include the Google Maps link provided in the context. Format it as: [Name](URL).`,
        `- If asked for directions, prioritize sending the direct Google Maps link.`,
        `IMPORTANT: ASSUME the user is currently at the property "Sleep HAIbeat". DO NOT ask for their current location.`,
        `If you don't know the answer from the context, say so politely.`,
        `If you don't know the answer from the context, say so politely.`,
        `Always answer completely in the same language as the user's question (or default to ${lang === 'pt' ? 'Portuguese' : 'English'}).`,
        `IMPORTANT: Even if the CONTEXT DATA is in a different language, YOU MUST TRANSLATE the information to match the user's language. Do not mix languages.`,
        `CONTEXT DATA:`,
        getPropertyContext(),
        getHouseGuideContext(lang),
        getRecommendationsContext(lang)
    ].join("\n\n");
};

export interface AIConfig {
    apiKey: string;
    model: string;
    provider: 'openai' | 'gemini';
}

// Real OpenAI Call
const callOpenAI = async (
    message: string,
    history: ChatMessage[],
    lang: Language,
    config: AIConfig
): Promise<string> => {
    try {
        const systemPrompt = buildSystemContext(lang);

        const messages = [
            { role: 'system', content: systemPrompt },
            ...history.slice(-5).map(m => ({ role: m.role, content: m.content })), // Send last 5 messages for context
            { role: 'user', content: message }
        ];

        const response = await fetch('https://api.openai.com/v1/chat/completions', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${config.apiKey}`
            },
            body: JSON.stringify({
                model: config.model, // e.g., 'gpt-4o-mini', 'gpt-3.5-turbo'
                messages: messages,
                max_completion_tokens: 40000
            })
        });

        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(`OpenAI Error: ${errorData.error?.message || response.statusText}`);
        }

        const data = await response.json();

        if (!data.choices || !data.choices[0] || !data.choices[0].message || !data.choices[0].message.content) {
            return `DEBUG: API returned success but no content. Response: ${JSON.stringify(data)}`;
        }

        return data.choices[0]?.message?.content;
    } catch (error) {
        console.error("OpenAI API Call Failed", error);
        return lang === 'pt'
            ? `Erro ao conectar com a IA: ${(error as Error).message}. Usando respostas offline.`
            : `Error connecting to AI: ${(error as Error).message}. Using offline responses.`;
    }
};

// Main Service Function
export const sendMessageToAI = async (
    message: string,
    history: ChatMessage[],
    lang: Language = 'en',
    config?: AIConfig
): Promise<string> => {

    // 1. Try Real AI if Configured
    if (config && config.apiKey) {
        try {
            // Logic to support optional provider if we strictly enforced it but for now default to 'openai' logic or check key format
            // Since user explicitely selected openai model, we assume openai execution pathway
            // However, we passed 'provider' in config.
            if (config.provider === 'openai') {
                return await callOpenAI(message, history, lang, config);
            }
            // Future: Add Gemini support here
        } catch (e) {
            console.warn("Falling back to Mock due to error", e);
        }
    }

    // 2. MOCK Fallback (Simulator)
    await new Promise(resolve => setTimeout(resolve, 1000));

    const lowerMsg = message.toLowerCase();

    // Simple keyword matching for the mock
    if (lowerMsg.includes('wifi') || lowerMsg.includes('internet') || lowerMsg.includes('wi-fi')) {
        return lang === 'pt'
            ? "A rede e a senha do Wi-Fi estão disponíveis no card da tela inicial do aplicativo."
            : "The Wi-Fi network and password are available on the home screen card of the app.";
    }

    if (lowerMsg.includes('coffee') || lowerMsg.includes('cafe')) {
        const coffeeInfo = HOUSE_GUIDE_DATA[lang].appliances.find(a => a.id === 'coffee');
        if (coffeeInfo) {
            return lang === 'pt'
                ? `Temos uma ${coffeeInfo.name}. ${coffeeInfo.instruction}`
                : `We have a ${coffeeInfo.name}. ${coffeeInfo.instruction}`;
        }
    }

    if (lowerMsg.includes('check-in') || lowerMsg.includes('checkin')) {
        return lang === 'pt'
            ? "O check-in é self-service. Você recebeu o código do cofre por mensagem."
            : "Check-in is self-service. You received the lockbox code via message.";
    }

    if (lowerMsg.includes('restaurant') || lowerMsg.includes('eat') || lowerMsg.includes('comida') || lowerMsg.includes('restaurante')) {
        const recs = RECOMMENDATIONS_DATA[lang].filter(r => r.categoryId === 'eat');
        if (recs.length > 0) {
            const names = recs.map(r => r.title).join(', ');
            return lang === 'pt'
                ? `Para comer, recomendo: ${names}.`
                : `For eating, I recommend: ${names}.`;
        }
    }

    return lang === 'pt'
        ? "No modo offline (sem chave de API), só sei responder sobre Wi-Fi, Café, Check-in e Restaurantes. Conecte sua chave no Admin para eu ficar inteligente!"
        : "In offline mode (no API key), I only know about Wi-Fi, Coffee, Check-in, and Restaurants. Connect your key in Admin to make me smart!";
};
