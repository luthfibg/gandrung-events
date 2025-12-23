import React from 'react'
import { SquareArrowOutUpRight } from 'lucide-react';

const HeadJumper = () => {
  return (
    
    <div className="w-full max-w-sm font-mulish lg:text-2xl p-6 bg-neutral-primary-soft h-fit self-center border border-default rounded-xl shadow-xs">
        <div className="flex items-center justify-between mb-4">
            <h5 className="text-2xl font-semibold leading-none text-heading">Pintasan ke...</h5>
        </div>
        <div className="flow-root">
                <ul role="list" className="divide-y divide-default">
                    <li className="py-4 sm:py-4">
                        <a href="#category" className="flex items-center gap-2">
                            <div className="shrink-0">
                                <SquareArrowOutUpRight color='blue' />
                            </div>
                            <div className="flex-1 min-w-0 ms-2">
                                <p className="font-medium text-heading truncate">
                                    Kategori
                                </p>
                            </div>
                        </a>
                    </li>
                    <li className="py-4 sm:py-4">
                        <a href="#services" className="flex items-center gap-2">
                            <div className="shrink-0">
                                <SquareArrowOutUpRight color='blue' />
                            </div>
                            <div className="flex-1 min-w-0 ms-2">
                                <p className="font-medium text-heading truncate">
                                    Layanan Kami
                                </p>
                            </div>
                        </a>
                    </li>
                    <li className="py-4 sm:py-4">
                        <a href="#customers" className="flex items-center gap-2">
                            <div className="shrink-0">
                                <SquareArrowOutUpRight color='blue' />
                            </div>
                            <div className="flex-1 min-w-0 ms-2">
                                <p className="font-medium text-heading truncate">
                                    Pelanggan
                                </p>
                            </div>
                        </a>
                    </li>
                    <li className="py-4 sm:py-4">
                        <a href="#gallery" className="flex items-center gap-2">
                            <div className="shrink-0">
                                <SquareArrowOutUpRight color='blue' />
                            </div>
                            <div className="flex-1 min-w-0 ms-2">
                                <p className="font-medium text-heading truncate">
                                    Galeri
                                </p>
                            </div>
                        </a>
                    </li>
                    <li className="py-4 sm:py-4">
                        <a href="#contact" className="flex items-center gap-2">
                            <div className="shrink-0">
                                <SquareArrowOutUpRight color='blue' />
                            </div>
                            <div className="flex-1 min-w-0 ms-2">
                                <p className="font-medium text-heading truncate">
                                    Kontak Kami
                                </p>
                            </div>
                        </a>
                    </li>
                </ul>
        </div>
    </div>

  )
}

export default HeadJumper