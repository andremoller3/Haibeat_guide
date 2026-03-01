import React, { useState, useRef, useEffect } from 'react';
import { Send, MessageSquare, X, Minimize2, Loader2, Bot } from 'lucide-react';
import { sendMessageToAI, ChatMessage } from './chatService';
import { Language } from './types';

interface ChatWidgetProps {
    language: Language;
}

export const ChatWidget: React.FC<ChatWidgetProps> = ({ language }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState<ChatMessage[]>([
        {
            id: 'welcome',
            role: 'assistant',
            content: language === 'pt'
                ? 'Olá! Sou seu assistente virtual da Haibeat. Posso ajudar com dúvidas sobre a casa, eletrodomésticos ou dicas locais!'
                : 'Hello! I am your Haibeat virtual assistant. I can help with house questions, appliances, or local tips!',
            timestamp: new Date()
        }
    ]);
    const [inputValue, setInputValue] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const messagesEndRef = useRef<HTMLDivElement>(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages, isOpen]);

    // Check if chat is enabled
    const [isEnabled, setIsEnabled] = useState(true);

    useEffect(() => {
        const checkEnabled = () => {
            const stored = localStorage.getItem('chat_enabled');
            setIsEnabled(stored === null ? true : stored === 'true');
        };

        checkEnabled();
        window.addEventListener('storage', checkEnabled); // For cross-tab updates
        return () => window.removeEventListener('storage', checkEnabled);
    }, []);

    const handleSend = async () => {
        if (!inputValue.trim()) return;

        const userMsg: ChatMessage = {
            id: Date.now().toString(),
            role: 'user',
            content: inputValue,
            timestamp: new Date()
        };

        setMessages(prev => [...prev, userMsg]);
        setInputValue('');
        setIsLoading(true);

        try {
            // Retrieve configuration
            const openaiKey = localStorage.getItem('openai_api_key');
            // const geminiKey = localStorage.getItem('gemini_api_key'); // Future use
            const selectedModel = localStorage.getItem('selected_model') || 'gpt-5-mini';

            const config = openaiKey ? {
                apiKey: openaiKey,
                model: selectedModel,
                provider: 'openai' as const
            } : undefined;

            const responseText = await sendMessageToAI(userMsg.content, messages, language, config);

            const aiMsg: ChatMessage = {
                id: (Date.now() + 1).toString(),
                role: 'assistant',
                content: responseText,
                timestamp: new Date()
            };

            setMessages(prev => [...prev, aiMsg]);
        } catch (error) {
            console.error("Chat error", error);
        } finally {
            setIsLoading(false);
        }
    };

    const handleKeyDown = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            handleSend();
        }
    };

    if (!isEnabled) return null;

    if (!isOpen) {
        return (
            <button
                onClick={() => setIsOpen(true)}
                className="fixed bottom-6 right-6 z-50 p-4 bg-teal-600 hover:bg-teal-500 text-white rounded-full shadow-lg transition-all transform hover:scale-105 active:scale-95 flex items-center justify-center group"
            >
                <MessageSquare className="w-6 h-6" />
                <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 ease-in-out whitespace-nowrap group-hover:ml-2">
                    {language === 'pt' ? 'Ajuda' : 'Help'}
                </span>
            </button>
        );
    }

    return (
        <div className="fixed bottom-6 right-6 z-50 w-[90vw] max-w-sm h-[500px] flex flex-col font-sans">
            {/* Glassmorphism Container */}
            <div className="absolute inset-0 bg-white/90 backdrop-blur-xl rounded-2xl shadow-2xl border border-white/20 overflow-hidden flex flex-col">

                {/* Header */}
                <div className="p-4 bg-gradient-to-r from-teal-600 to-emerald-600 flex items-center justify-between text-white shadow-md z-10">
                    <div className="flex items-center gap-2">
                        <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                            <Bot className="w-5 h-5 text-white" />
                        </div>
                        <div>
                            <h3 className="font-semibold text-sm">Haibeat Assistant</h3>
                            <p className="text-[10px] text-teal-100 opacity-90 flex items-center gap-1">
                                <span className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse"></span>
                                Online
                            </p>
                        </div>
                    </div>
                    <button
                        onClick={() => setIsOpen(false)}
                        className="p-1 hover:bg-white/10 rounded-full transition-colors"
                    >
                        <X className="w-5 h-5" />
                    </button>
                </div>

                {/* Messages Area */}
                <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-slate-50/50 scrollbar-thin scrollbar-thumb-slate-200">
                    {messages.map((msg) => (
                        <div
                            key={msg.id}
                            className={`flex w-full ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                        >
                            <div
                                className={`max-w-[85%] p-3 rounded-2xl text-sm shadow-sm ${msg.role === 'user'
                                    ? 'bg-teal-600 text-white rounded-br-sm'
                                    : 'bg-white text-slate-700 border border-slate-100 rounded-bl-sm'
                                    }`}
                            >
                                {/* Simple Markdown Parser for Bold and Links */}
                                {msg.content.split(/(\[.*?\]\(.*?\)|(?:\*\*|__).*?(?:\*\*|__))/g).map((part, i) => {
                                    // Links [text](url)
                                    const linkMatch = part.match(/\[(.*?)\]\((.*?)\)/);
                                    if (linkMatch) {
                                        return (
                                            <a
                                                key={i}
                                                href={linkMatch[2]}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="underline font-bold hover:text-teal-600 break-all"
                                                style={{ color: msg.role === 'user' ? 'white' : '#0d9488' }}
                                            >
                                                {linkMatch[1]}
                                            </a>
                                        );
                                    }
                                    // Bold **text**
                                    const boldMatch = part.match(/(?:\*\*|__)(.*?)(?:\*\*|__)/);
                                    if (boldMatch) {
                                        return <strong key={i}>{boldMatch[1]}</strong>;
                                    }
                                    // Plain text (handles newlines)
                                    return <span key={i} className="whitespace-pre-wrap">{part}</span>;
                                })}
                                <div className={`text-[9px] mt-1 text-right ${msg.role === 'user' ? 'text-teal-100' : 'text-slate-400'}`}>
                                    {msg.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                                </div>
                            </div>
                        </div>
                    ))}
                    {isLoading && (
                        <div className="flex justify-start">
                            <div className="bg-white p-3 rounded-2xl rounded-bl-sm border border-slate-100 shadow-sm flex items-center gap-2">
                                <Loader2 className="w-4 h-4 text-teal-600 animate-spin" />
                                <span className="text-xs text-slate-500">Thinking...</span>
                            </div>
                        </div>
                    )}
                    <div ref={messagesEndRef} />
                </div>

                {/* Input Area */}
                <div className="p-4 bg-white border-t border-slate-100">
                    <div className="flex items-center gap-2 bg-slate-100 rounded-full px-4 py-2 border border-slate-200 focus-within:border-teal-500 focus-within:ring-1 focus-within:ring-teal-500 transition-all">
                        <input
                            type="text"
                            value={inputValue}
                            onChange={(e) => setInputValue(e.target.value)}
                            onKeyDown={handleKeyDown}
                            placeholder={language === 'pt' ? "Digite sua pergunta..." : "Type your question..."}
                            className="flex-1 bg-transparent border-none outline-none text-sm text-slate-700 placeholder:text-slate-400"
                            autoFocus
                        />
                        <button
                            onClick={handleSend}
                            disabled={!inputValue.trim() || isLoading}
                            className="p-1.5 bg-teal-600 text-white rounded-full hover:bg-teal-500 disabled:opacity-50 disabled:cursor-not-allowed transition-colors shadow-sm"
                        >
                            <Send className="w-4 h-4" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};
