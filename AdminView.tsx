import React, { useState, useEffect } from 'react';
import { Lock, Eye, EyeOff, Save, ShieldCheck, ToggleLeft, ToggleRight, LogOut, Key } from 'lucide-react';

interface AdminViewProps {
    onLogout: () => void;
}

export const AdminView: React.FC<AdminViewProps> = ({ onLogout }) => {
    // Auth state
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    // Settings state
    const [chatEnabled, setChatEnabled] = useState(true);
    const [openaiKey, setOpenaiKey] = useState('');
    const [geminiKey, setGeminiKey] = useState('');
    const [selectedModel, setSelectedModel] = useState('gpt-5-mini');
    const [saveStatus, setSaveStatus] = useState<'idle' | 'saving' | 'saved'>('idle');

    useEffect(() => {
        // Check if already authenticated
        const auth = localStorage.getItem('admin_authenticated');
        if (auth === 'true') {
            setIsAuthenticated(true);
        }

        // Load settings
        const storedChatEnabled = localStorage.getItem('chat_enabled');
        setChatEnabled(storedChatEnabled === null ? true : storedChatEnabled === 'true');
        setOpenaiKey(localStorage.getItem('openai_api_key') || '');
        setGeminiKey(localStorage.getItem('gemini_api_key') || '');
        setSelectedModel(localStorage.getItem('selected_model') || 'gpt-5-mini');
    }, []);

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();
        if (email === 'admin@sleephaibeat.com' && password === '$Admin&Haibeat') {
            setIsAuthenticated(true);
            localStorage.setItem('admin_authenticated', 'true');
            setError('');
        } else {
            setError('Invalid credentials');
        }
    };

    const handleLogout = () => {
        localStorage.removeItem('admin_authenticated');
        setIsAuthenticated(false);
        setEmail('');
        setPassword('');
        onLogout();
    };

    const handleSaveSettings = () => {
        setSaveStatus('saving');
        localStorage.setItem('chat_enabled', String(chatEnabled));
        localStorage.setItem('openai_api_key', openaiKey);
        localStorage.setItem('gemini_api_key', geminiKey);
        localStorage.setItem('selected_model', selectedModel);

        // Provide visual feedback
        setTimeout(() => {
            setSaveStatus('saved');
            // Trigger a window event so ChatWidget updates immediately
            window.dispatchEvent(new Event('storage'));
            setTimeout(() => setSaveStatus('idle'), 2000);
        }, 500);
    };

    if (!isAuthenticated) {
        return (
            <div className="flex flex-col items-center justify-center min-h-[60vh] p-4 animate-fade-in">
                <div className="w-full max-w-sm bg-white rounded-2xl shadow-xl border border-stone-100 p-8">
                    <div className="flex justify-center mb-6">
                        <div className="bg-navy-50 p-4 rounded-full text-navy-600">
                            <Lock size={32} />
                        </div>
                    </div>

                    <h2 className="text-2xl font-bold text-center text-navy-900 mb-2">Admin Login</h2>
                    <p className="text-center text-stone-500 text-sm mb-8">Access restricted to authorized personnel.</p>

                    <form onSubmit={handleLogin} className="space-y-4">
                        <div>
                            <label className="block text-xs font-bold text-stone-600 uppercase mb-1">Email</label>
                            <input
                                type="email"
                                value={email}
                                onChange={e => setEmail(e.target.value)}
                                className="w-full p-3 rounded-lg border border-stone-200 focus:border-teal-500 focus:ring-1 focus:ring-teal-500 outline-none transition-all"
                                placeholder="admin@example.com"
                            />
                        </div>

                        <div className="relative">
                            <label className="block text-xs font-bold text-stone-600 uppercase mb-1">Password</label>
                            <input
                                type={showPassword ? "text" : "password"}
                                value={password}
                                onChange={e => setPassword(e.target.value)}
                                className="w-full p-3 rounded-lg border border-stone-200 focus:border-teal-500 focus:ring-1 focus:ring-teal-500 outline-none transition-all"
                                placeholder="••••••••"
                            />
                            <button
                                type="button"
                                onClick={() => setShowPassword(!showPassword)}
                                className="absolute right-3 top-8 text-stone-400 hover:text-stone-600"
                            >
                                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                            </button>
                        </div>

                        {error && (
                            <div className="bg-red-50 text-red-600 px-4 py-2 rounded-lg text-sm font-medium flex items-center gap-2">
                                <ShieldCheck size={16} />
                                {error}
                            </div>
                        )}

                        <button
                            type="submit"
                            className="w-full py-3 bg-navy-900 text-white rounded-xl font-bold hover:bg-navy-800 transition-colors shadow-lg shadow-navy-200 mt-4"
                        >
                            Authenticate
                        </button>
                    </form>
                </div>
            </div>
        );
    }

    return (
        <div className="space-y-6 animate-fade-in pb-8">
            <div className="flex items-center justify-between px-1">
                <h2 className="text-xl font-bold text-navy-900 flex items-center gap-2">
                    <ShieldCheck className="text-teal-600" />
                    Admin Dashboard
                </h2>
                <button
                    onClick={handleLogout}
                    className="text-stone-400 hover:text-red-500 p-2 rounded-full hover:bg-red-50 transition-colors"
                    title="Logout"
                >
                    <LogOut size={20} />
                </button>
            </div>

            {/* AI Settings Card */}
            <div className="bg-white rounded-2xl shadow-sm border border-stone-200 overflow-hidden">
                <div className="bg-navy-900 p-4 text-white flex justify-between items-center">
                    <div className="flex items-center gap-2">
                        <div className="bg-white/10 p-1.5 rounded-lg">
                            <Key size={18} />
                        </div>
                        <h3 className="font-bold">AI Configuration</h3>
                    </div>
                    <div className="text-xs font-mono bg-white/10 px-2 py-1 rounded text-teal-200">
                        v1.0
                    </div>
                </div>

                <div className="p-6 space-y-6">
                    {/* Chat Toggle */}
                    <div className="flex items-center justify-between p-4 bg-stone-50 rounded-xl border border-stone-100">
                        <div>
                            <h4 className="font-bold text-navy-900">AI Chat Widget</h4>
                            <p className="text-xs text-stone-500 mt-1">Enable or disable the floating chat bubble.</p>
                        </div>
                        <button
                            onClick={() => setChatEnabled(!chatEnabled)}
                            className={`transition-colors duration-300 ${chatEnabled ? 'text-teal-600' : 'text-stone-300'}`}
                        >
                            {chatEnabled ? <ToggleRight size={40} /> : <ToggleLeft size={40} />}
                        </button>
                    </div>

                    <div className="border-t border-stone-100 my-4"></div>

                    {/* API Keys */}
                    <div className="space-y-4">
                        <div>
                            <label className="block text-xs font-bold text-navy-700 uppercase mb-2">OpenAI API Key</label>
                            <input
                                type="password"
                                value={openaiKey}
                                onChange={e => setOpenaiKey(e.target.value)}
                                placeholder="sk-..."
                                className="w-full font-mono text-sm bg-stone-50 border border-stone-200 rounded-lg p-3 outline-none focus:border-teal-500 transition-colors"
                            />
                        </div>

                        {/* Model Selector (Only visible if OpenAI is implied or just general) */}
                        <div>
                            <label className="block text-xs font-bold text-navy-700 uppercase mb-2">OpenAI Model</label>
                            <select
                                value={selectedModel}
                                onChange={e => setSelectedModel(e.target.value)}
                                className="w-full text-sm bg-stone-50 border border-stone-200 rounded-lg p-3 outline-none focus:border-teal-500 transition-colors cursor-pointer appearance-none"
                            >
                                <option value="gpt-5-mini">GPT-5 Mini</option>
                                <option value="gpt-5-nano">GPT-5 Nano</option>
                            </select>
                        </div>

                        <div>
                            <label className="block text-xs font-bold text-navy-700 uppercase mb-2">Gemini API Key</label>
                            <input
                                type="password"
                                value={geminiKey}
                                onChange={e => setGeminiKey(e.target.value)}
                                placeholder="AIza..."
                                className="w-full font-mono text-sm bg-stone-50 border border-stone-200 rounded-lg p-3 outline-none focus:border-teal-500 transition-colors"
                            />
                        </div>
                    </div>

                    <button
                        onClick={handleSaveSettings}
                        disabled={saveStatus === 'saving'}
                        className={`w-full py-3 rounded-xl font-bold flex items-center justify-center gap-2 transition-all ${saveStatus === 'saved'
                            ? 'bg-green-500 text-white'
                            : 'bg-teal-600 hover:bg-teal-500 text-white shadow-md hover:shadow-lg'
                            }`}
                    >
                        {saveStatus === 'saving' ? (
                            <span className="animate-pulse">Saving...</span>
                        ) : saveStatus === 'saved' ? (
                            <>Saved <ShieldCheck size={18} /></>
                        ) : (
                            <>Save Settings <Save size={18} /></>
                        )}
                    </button>
                </div>
            </div>
        </div>
    );
};
