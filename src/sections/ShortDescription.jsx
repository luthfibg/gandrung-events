import React from 'react'
import { ArrowRight } from 'lucide-react';

const ShortDescription = () => {
  return (
    <div className="flex items-center space-x-4 group cursor-pointer px-20 w-full">
      {/* Wrapper Deskripsi Singkat */}
      <div className="bg-[#3d3129] backdrop-blur-sm border-l-10 w-full border-yellow-500 p-4 rounded-r-xl">
        <p className="font-mulish text-start text-white/80 lg:text-2xl leading-relaxed w-full">
          Mengusung inovasi di bidang audiovisual
multimedia berlandaskan nilai nilai tradisi
kejujuran manusiawi dan keberlanjutan melayani kebutuhan masyarakat dengan perangkat peralatan audiovisual kekinian
yang canggih (up to date)
        </p>
      </div>

      {/* Kontainer Panah Animasi */}
      <div className="relative flex items-center justify-center w-10 h-10">
        <div className="absolute inset-0 bg-[#3d3129] rounded-full animate-ping"></div>
        
        <div className="animate-arrow-guide">
          <ArrowRight className="text-[#3d3129]" size={32} />
        </div>
      </div>
    </div>
  )
}

export default ShortDescription