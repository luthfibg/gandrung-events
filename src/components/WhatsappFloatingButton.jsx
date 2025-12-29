import React from 'react';
import { MessageCircle } from 'lucide-react';

const WhatsappFloatingButton = () => {
  const phoneNumber = "62818212777";
  const message = "Halo Gandrung Event, saya ingin bertanya tentang peralatan event.";

  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-10 left-10 z-9999 group flex items-center justify-center"
      aria-label="Chat via WhatsApp"
    >
      {/* Tooltip Label */}
      <span className="absolute left-20 font-mulish lg:text-2xl bg-white text-gray-800 px-3 py-1.5 rounded-lg shadow-xl text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none border border-gray-100">
        Tanya Kami Sekarang!
      </span>

      {/* Button Body */}
      <div className="bg-[#25D366] p-4 rounded-full shadow-2xl hover:bg-[#20ba5a] hover:scale-110 transition-all duration-300 ease-in-out flex items-center justify-center animate-bounce-slow">
        <MessageCircle size={32} color="white" fill="white" />
        
        {/* Ping Animation (Efek radar) */}
        <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-20"></span>
      </div>
    </a>
  );
};

export default WhatsappFloatingButton;