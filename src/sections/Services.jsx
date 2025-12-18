import React from 'react';
import { Check, X } from 'lucide-react';

const Services = () => {
  const features = [
    "Delivery Gratis",
    "Instalasi & Pembongkaran Gratis",
    "Kru Stanby Saat Event",
    "Survey Lokasi",
    "Pembayaran Mudah",
    "Garansi Produk & Layanan",
    "Maintenance Konten",
    "Free Pembuatan Konten Pertama"
  ];

  return (
    <section className="py-8 bg-white dark:bg-gray-950">
      <div className="w-full mx-auto px-4">

        {/* Wrapper Tabel */}
        <div className="overflow-x-auto">
          <div className="min-w-[600px] grid grid-cols-5 items-stretch">
            
            {/* Kolom Kiri: Nama Fitur */}
            <div className="col-span-1 pt-20">
              {features.map((feature, index) => (
                <div key={index} className="h-16 flex font-mulish items-center pr-4 border-b border-gray-100 dark:border-gray-800 text-xl font-semibold text-gray-600 dark:text-gray-400 tracking-tighter">
                  {feature}
                </div>
              ))}
            </div>

            {/* Kolom Tengah (Highlighted): Gandrung Event */}
            <div className="col-span-1 bg-gandrung-dark rounded-t-3xl shadow-2xl relative border-x border-t border-gandrung-gold/30">
              <div className="text-center flex flex-col gap-2 py-6">
                <span className="text-gandrung-gold font-mulish text-xl">LED Videotron</span>
                {/* <span className="text-gandrung-gold font-mulish text-lg">(Unggulan)</span> */}
              </div>
              {features.map((_, index) => (
                <div key={index} className="h-16 flex justify-center items-center border-b border-white/10">
                    {index < features.length - 2 && (
                        <div className="bg-gandrung-gold rounded-full p-1">
                        <Check size={20} className="text-gandrung-dark stroke-[3px]" />
                        </div>
                    )}

                </div>
              ))}
              {/* Badge Popular (Opsional) */}
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gandrung-gold text-gandrung-dark text-[10px] font-bold px-3 py-1 rounded-full uppercase">
                Unggulan
              </div>
            </div>

            {/* Kolom Perbandingan: Vendor Biasa */}
            <div className="col-span-1 bg-gray-50 dark:bg-gray-900/50">
              <div className="top-0 w-full text-center py-6 text-gray-900 font-mulish text-xl">
                TV/Teleprompter
              </div>
              {features.map((_, index) => (
                <div key={index} className="h-16 flex justify-center items-center border-b border-gray-200 dark:border-gray-800">
                    {index == 1 || index == 3 || index == 6 || index == 7 ? (
                        <div className="bg-gandrung-gold rounded-full p-1">
                            <X size={20} className="text-gandrung-dark stroke-[3px]" />
                        </div>
                    ) : (
                        <div className="bg-gandrung-gold rounded-full p-1">
                            <Check size={20} className="text-gandrung-dark stroke-[3px]" />
                        </div>
                    )}
                </div>
              ))}
            </div>

            {/* Kolom Perbandingan: Freelance */}
            <div className="col-span-1 bg-gray-50 dark:bg-gray-900/50 rounded-tr-3xl">
              <div className="top-0 w-full text-center py-6 text-gray-900 font-mulish text-xl">
                Projector
              </div>
              {features.map((_, index) => (
                <div key={index} className="h-16 flex justify-center items-center border-b border-gray-200 dark:border-gray-800">
                    {index == 3 || index == 4 || index == 5 ? (
                        <div className="bg-gandrung-gold rounded-full p-1">
                            <X size={20} className="text-gandrung-dark stroke-[3px]" />
                        </div>
                    ) : (
                        <div className="bg-gandrung-gold rounded-full p-1">
                            <Check size={20} className="text-gandrung-dark stroke-[3px]" />
                        </div>
                    )}
                </div>
              ))}
            </div>

            <div className="col-span-1 bg-gandrung-dark rounded-t-3xl shadow-2xl relative border-x border-t border-gandrung-gold/30">
              <div className="text-center flex flex-col gap-2 py-6">
                <span className="text-gandrung-gold font-mulish text-md xl:text-xl">Digital Promo On Event</span>
                {/* <span className="text-gandrung-gold font-mulish text-lg">(Unggulan)</span> */}
              </div>
              {features.map((_, index) => (
                <div key={index} className="h-16 flex justify-center items-center border-b border-white/10">
                {index == 6 || index == 7 ? (
                    <div className="bg-gandrung-gold rounded-full p-1">
                        <Check size={20} className="text-gandrung-dark stroke-[3px]" />
                    </div>
                ) : (
                    <div className="bg-gandrung-gold rounded-full p-1">
                        <X size={20} className="text-gandrung-dark stroke-[3px]" />
                    </div>
                )}
                </div>
              ))}
              {/* Badge Popular (Opsional) */}
              <div className="absolute w-[60%] font-mulish text-center -top-4 left-1/2 -translate-x-1/2 bg-gandrung-gold text-gandrung-dark text-xs font-bold px-3 py-1 rounded-full">
                Coming Soon
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;