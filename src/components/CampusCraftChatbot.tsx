import { useState, useRef, useEffect } from 'react';
import { Bot, X, Send, Sparkles, MessageSquare, ChevronDown, ArrowRight, Mail, ExternalLink, ShieldCheck, Zap } from 'lucide-react';
import { ChatMessage, getChatbotResponse } from '../utils/chatbotKnowledgeEngine';

interface CampusCraftChatbotProps {
  isOpen: boolean;
  onClose: () => void;
  onOpen: () => void;
}

export function CampusCraftChatbot({ isOpen, onClose, onOpen }: CampusCraftChatbotProps) {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 'welcome-msg',
      sender: 'ai',
      text: `Hello! 👋 I'm your **CampusCraft AI Assistant**.

Ask me anything about turning your school or college project into a live presentation website, our **₹500 / ₹600 pricing**, the **"1st view your work, then only pay"** policy, or our real client projects like **Arachne** and **MICP Lab**!`,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      quickActions: [
        { label: '🛡️ How does payment work?', actionType: 'query', payload: 'How does the view first then pay policy work?' },
        { label: '💰 Compare ₹500 vs ₹600 Plan', actionType: 'query', payload: 'What is the difference between ₹500 and ₹600?' },
        { label: '⏱️ Can I get it in 24 hours?', actionType: 'query', payload: 'What is the turnaround time for urgent deadlines?' },
        { label: '🕸️ Tell me about Arachne project', actionType: 'query', payload: 'Tell me about Arachne and MICP projects' },
      ],
    },
  ]);

  const [inputText, setInputText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isOpen, isTyping]);

  const handleSend = (textToSend?: string) => {
    const query = (textToSend || inputText).trim();
    if (!query) return;

    const userMsg: ChatMessage = {
      id: `user-${Date.now()}`,
      sender: 'user',
      text: query,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };

    setMessages((prev) => [...prev, userMsg]);
    if (!textToSend) setInputText('');
    setIsTyping(true);

    // Realistic typing delay
    setTimeout(() => {
      const response = getChatbotResponse(query);
      setMessages((prev) => [...prev, response]);
      setIsTyping(false);
    }, 450);
  };

  const handleQuickAction = (action: { label: string; actionType: 'scroll' | 'email' | 'query' | 'link'; payload: string }) => {
    if (action.actionType === 'query') {
      handleSend(action.payload);
    } else if (action.actionType === 'scroll') {
      onClose();
      const el = document.getElementById(action.payload);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    } else if (action.actionType === 'email') {
      window.location.href = `mailto:${action.payload}?subject=School%20Project%20Website%20Inquiry`;
    } else if (action.actionType === 'link') {
      window.open(action.payload, '_blank');
    }
  };

  return (
    <>
      {/* Floating Bottom-Right Launcher (When closed) */}
      {!isOpen && (
        <button
          type="button"
          onClick={onOpen}
          aria-label="Open CampusCraft AI Assistant"
          className="fixed bottom-5 right-5 z-40 p-3.5 sm:px-4 sm:py-3 rounded-full glass-capsule glass-capsule-hover border border-cyan-400/40 shadow-[0_0_25px_rgba(6,182,212,0.35)] flex items-center gap-2.5 text-xs font-semibold text-white group cursor-pointer active:scale-95 transition-all"
        >
          <div className="w-7 h-7 rounded-full bg-cyan-400/20 border border-cyan-400/50 flex items-center justify-center text-cyan-300 group-hover:scale-110 transition-transform">
            <Bot className="w-4 h-4 animate-pulse" />
          </div>
          <span className="hidden sm:inline bg-gradient-to-r from-white via-slate-100 to-cyan-200 bg-clip-text text-transparent font-bold">
            Ask CampusCraft AI
          </span>
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping ml-0.5" />
        </button>
      )}

      {/* Chatbot Window (When open) */}
      {isOpen && (
        <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 w-[92vw] sm:w-[420px] max-w-[440px] h-[550px] max-h-[85vh] flex flex-col glass-capsule rounded-[32px] border border-cyan-400/50 shadow-[0_20px_60px_-15px_rgba(6,182,212,0.4)] overflow-hidden animate-in fade-in slide-in-from-bottom-4 duration-250 bg-slate-950/95 backdrop-blur-2xl">
          {/* Top Header */}
          <div className="px-5 py-3.5 border-b border-white/15 bg-black/40 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-2xl bg-gradient-to-tr from-cyan-400/30 to-indigo-500/30 border border-cyan-400/40 flex items-center justify-center text-cyan-300 shadow-md">
                <Bot className="w-5 h-5" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <span className="font-bold text-sm text-white">CampusCraft AI</span>
                  <span className="text-[10px] px-1.5 py-0.2 rounded bg-cyan-500/20 text-cyan-300 font-mono border border-cyan-400/30">
                    Client Engine
                  </span>
                </div>
                <div className="flex items-center gap-1.5 text-[11px] text-emerald-400">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  <span>Instant Answers · Zero Lag</span>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-1.5">
              <button
                type="button"
                onClick={onClose}
                className="p-1.5 rounded-xl hover:bg-white/10 text-slate-400 hover:text-white transition-colors cursor-pointer"
                title="Minimize Chatbot"
                aria-label="Close"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Messages Scroll Area */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3.5 text-xs text-slate-200">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex flex-col ${msg.sender === 'user' ? 'items-end' : 'items-start'}`}
              >
                <div
                  className={`max-w-[85%] p-3.5 rounded-2xl leading-relaxed whitespace-pre-wrap ${
                    msg.sender === 'user'
                      ? 'bg-gradient-to-r from-cyan-400 to-sky-400 text-slate-950 font-medium rounded-tr-none shadow-md'
                      : 'bg-white/[0.08] border border-white/15 text-slate-100 rounded-tl-none shadow-sm'
                  }`}
                >
                  {msg.text}
                </div>

                <span className="text-[10px] text-slate-500 mt-1 px-1 font-mono">
                  {msg.timestamp}
                </span>

                {/* Quick Action Chips attached to AI response */}
                {msg.quickActions && msg.quickActions.length > 0 && (
                  <div className="flex flex-wrap gap-1.5 mt-2 max-w-[95%]">
                    {msg.quickActions.map((act, i) => (
                      <button
                        key={i}
                        type="button"
                        onClick={() => handleQuickAction(act)}
                        className="px-2.5 py-1 rounded-full bg-cyan-950/50 hover:bg-cyan-500/20 text-cyan-200 border border-cyan-400/30 text-[10px] font-medium transition-all cursor-pointer flex items-center gap-1 active:scale-95"
                      >
                        <span>{act.label}</span>
                        <ArrowRight className="w-2.5 h-2.5 opacity-60" />
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ))}

            {/* Typing Indicator */}
            {isTyping && (
              <div className="flex items-center gap-1.5 p-3 rounded-2xl bg-white/[0.08] border border-white/15 w-fit rounded-tl-none text-cyan-300">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-bounce" />
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-300 animate-bounce [animation-delay:150ms]" />
                <span className="w-1.5 h-1.5 rounded-full bg-sky-400 animate-bounce [animation-delay:300ms]" />
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Quick Starter Pills Bar (If only 1 message) */}
          {messages.length === 1 && (
            <div className="px-4 py-2 border-t border-white/10 bg-black/20 flex gap-1.5 overflow-x-auto text-[10px] no-scrollbar">
              <button
                type="button"
                onClick={() => handleSend('How does the view first then pay guarantee work?')}
                className="px-2.5 py-1 rounded-full bg-white/5 hover:bg-white/15 text-slate-300 whitespace-nowrap cursor-pointer transition-colors"
              >
                🛡️ View First, Then Pay?
              </button>
              <button
                type="button"
                onClick={() => handleSend('What is the difference between ₹500 and ₹600 packages?')}
                className="px-2.5 py-1 rounded-full bg-white/5 hover:bg-white/15 text-slate-300 whitespace-nowrap cursor-pointer transition-colors"
              >
                💰 ₹500 vs ₹600?
              </button>
              <button
                type="button"
                onClick={() => handleSend('Can I get my project website in 24 hours?')}
                className="px-2.5 py-1 rounded-full bg-white/5 hover:bg-white/15 text-slate-300 whitespace-nowrap cursor-pointer transition-colors"
              >
                ⏱️ Urgent 24h?
              </button>
            </div>
          )}

          {/* Input Box */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSend();
            }}
            className="p-3 border-t border-white/15 bg-black/40 flex items-center gap-2"
          >
            <input
              type="text"
              placeholder="Ask about project pricing, viva tips, or turnaround..."
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              className="flex-1 px-3.5 py-2.5 rounded-2xl bg-black/60 border border-white/15 text-white placeholder-slate-500 text-xs focus:outline-none focus:border-cyan-400 transition-colors"
            />

            <button
              type="submit"
              disabled={!inputText.trim() || isTyping}
              className="p-2.5 rounded-2xl bg-gradient-to-r from-cyan-300 via-white to-cyan-200 text-slate-950 font-bold transition-all disabled:opacity-40 cursor-pointer active:scale-95 shadow-md shrink-0"
              title="Send message"
            >
              <Send className="w-4 h-4" />
            </button>
          </form>
        </div>
      )}
    </>
  );
}
