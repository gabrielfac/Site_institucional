'use client';

import { useState, useEffect, useRef } from 'react';
import { MapPin, User, MoreVertical, Phone, Video } from 'lucide-react';

type Message = {
  id: number;
  sender: 'agent' | 'user';
  text?: string;
  isTyping?: boolean;
  isMap?: boolean;
};

export default function WhatsAppSim() {
  const [messages, setMessages] = useState<Message[]>([]);
  const chatContainerRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    let isMounted = true;
    let timeoutIds: NodeJS.Timeout[] = [];

    const wait = (ms: number) => new Promise(resolve => {
      const id = setTimeout(resolve, ms);
      timeoutIds.push(id);
    });

    const runSimulation = async () => {
      while (isMounted) {
        setMessages([]);
        await wait(1000);
        if (!isMounted) break;

        // Agent typing
        setMessages([{ id: 1, sender: 'agent', isTyping: true }]);
        await wait(1500);
        if (!isMounted) break;

        // Agent message 1
        setMessages([{ id: 1, sender: 'agent', text: 'Olá, Sr. Carlos! Identificamos sua consulta agendada para amanhã, às 14h, na UBS Central. Confirma sua presença? Responda SIM ou NÃO.' }]);
        await wait(2000);
        if (!isMounted) break;

        // User pause
        await wait(1000);
        if (!isMounted) break;

        // User message
        setMessages(prev => [...prev, { id: 2, sender: 'user', text: 'SIM' }]);
        await wait(1500);
        if (!isMounted) break;

        // Agent typing
        setMessages(prev => [...prev, { id: 3, sender: 'agent', isTyping: true }]);
        await wait(1000);
        if (!isMounted) break;

        // Agent message 2
        setMessages(prev => prev.map(m => m.id === 3 ? { id: 3, sender: 'agent', text: 'Excelente! Presença confirmada. ✅' } : m));
        await wait(1500);
        if (!isMounted) break;

        // Agent typing
        setMessages(prev => [...prev, { id: 4, sender: 'agent', isTyping: true }]);
        await wait(1000);
        if (!isMounted) break;

        // Agent message 3 (Map)
        setMessages(prev => prev.map(m => m.id === 4 ? { id: 4, sender: 'agent', text: 'Aqui está a localização da unidade:', isMap: true } : m));

        // Wait before restarting
        await wait(6000);
      }
    };

    runSimulation();

    return () => {
      isMounted = false;
      timeoutIds.forEach(clearTimeout);
    };
  }, []);

  return (
    <div className="w-full max-w-[340px] bg-[#e5ddd5] rounded-[2.5rem] overflow-hidden shadow-2xl border-[8px] border-slate-800 relative h-[600px] flex flex-col font-sans">
      {/* Header */}
      <div className="bg-[#075E54] text-white px-4 py-3 flex items-center justify-between z-10 shadow-md">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center overflow-hidden p-1">
            <img src="/assets/images/logo.png" alt="RG IA" className="w-full h-full object-contain" />
          </div>
          <div>
            <h3 className="font-semibold text-sm leading-tight">IA RG Soluções</h3>
            <p className="text-[10px] text-white/80">online</p>
          </div>
        </div>
        <div className="flex items-center gap-3 text-white/90">
          <Video size={18} />
          <Phone size={18} />
          <MoreVertical size={18} />
        </div>
      </div>

      {/* Chat Body */}
      <div 
        ref={chatContainerRef}
        className="flex-1 p-4 overflow-y-auto space-y-3 flex flex-col bg-[url('https://user-images.githubusercontent.com/15075759/28719144-86dc0f70-73b1-11e7-911d-60d70fcded21.png')] bg-cover bg-center"
      >
        <div className="bg-[#E1F3FB] text-slate-600 text-[11px] px-3 py-1 rounded-lg self-center mb-2 shadow-sm">
          Hoje
        </div>

        {messages.map((msg) => (
          <div
            key={msg.id}
            className={`p-3 max-w-[85%] text-[13px] leading-relaxed shadow-sm relative ${
              msg.sender === 'agent'
                ? 'bg-white text-slate-800 rounded-tr-xl rounded-br-xl rounded-bl-xl self-start'
                : 'bg-[#DCF8C6] text-slate-800 rounded-tl-xl rounded-bl-xl rounded-br-xl self-end'
            }`}
          >
            {/* Tail */}
            <div className={`absolute top-0 w-3 h-3 ${
              msg.sender === 'agent'
                ? '-left-2 bg-white [clip-path:polygon(100%_0,0_0,100%_100%)]'
                : '-right-2 bg-[#DCF8C6] [clip-path:polygon(0_0,100%_0,0_100%)]'
            }`}></div>

            {msg.isTyping ? (
              <div className="flex items-center gap-1 h-5 px-1">
                <div className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                <div className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
                <div className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
              </div>
            ) : (
              <>
                <p>{msg.text}</p>
                {msg.isMap && (
                  <div className="mt-2 rounded-lg overflow-hidden border border-slate-200 bg-slate-100 h-24 flex items-center justify-center relative">
                    <div className="absolute inset-0 bg-slate-200 opacity-50"></div>
                    <MapPin className="text-red-500 relative z-10" size={32} />
                    <div className="absolute bottom-2 left-2 right-2 bg-white/90 backdrop-blur-sm text-[10px] font-medium px-2 py-1 rounded shadow-sm text-slate-700 truncate">
                      UBS Central - Av. Principal, 1000
                    </div>
                  </div>
                )}
                <div className="text-[10px] text-slate-400 text-right mt-1 flex justify-end items-center gap-1">
                  14:00
                  {msg.sender === 'user' && (
                    <svg viewBox="0 0 16 15" width="16" height="15" className="text-[#53bdeb] fill-current">
                      <path d="M15.01 3.316l-.478-.372a.365.365 0 0 0-.51.063L8.666 9.879a.32.32 0 0 1-.484.033l-.358-.325a.319.319 0 0 0-.484.032l-.378.483a.418.418 0 0 0 .036.541l1.32 1.266c.143.14.361.125.484-.033l6.272-8.048a.366.366 0 0 0-.064-.512zm-4.1 0l-.478-.372a.365.365 0 0 0-.51.063L4.566 9.879a.32.32 0 0 1-.484.033L1.891 7.769a.366.366 0 0 0-.515.006l-.423.433a.364.364 0 0 0 .006.514l3.258 3.185c.143.14.361.125.484-.033l6.272-8.048a.365.365 0 0 0-.063-.51z"></path>
                    </svg>
                  )}
                </div>
              </>
            )}
          </div>
        ))}
      </div>

      {/* Input Area */}
      <div className="bg-[#f0f0f0] p-2 flex items-center gap-2 z-10">
        <div className="flex-1 bg-white rounded-full px-4 py-2 text-sm text-slate-400 flex items-center">
          Mensagem
        </div>
        <div className="w-10 h-10 bg-[#00A884] rounded-full flex items-center justify-center text-white shrink-0">
          <svg viewBox="0 0 24 24" width="24" height="24" className="fill-current">
            <path d="M11.999 14.942c2.001 0 3.531-1.53 3.531-3.531V4.35c0-2.001-1.53-3.531-3.531-3.531S8.469 2.349 8.469 4.35v7.061c0 2.001 1.53 3.531 3.531 3.531zm6.238-3.53c0 3.531-2.942 6.002-6.237 6.002s-6.237-2.471-6.237-6.002H3.761c0 4.001 3.178 7.297 7.061 7.885v3.884h2.354v-3.884c3.884-.588 7.061-3.884 7.061-7.885h-2.002z"></path>
          </svg>
        </div>
      </div>
    </div>
  );
}
