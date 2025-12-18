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
                        <div className="flex items-center gap-2">
                            <div className="shrink-0">
                                <SquareArrowOutUpRight color='blue' />
                            </div>
                            <div className="flex-1 min-w-0 ms-2">
                                <p className="font-medium text-heading truncate">
                                    Produk Sewa
                                </p>
                            </div>
                        </div>
                    </li>
                    <li className="py-4 sm:py-4">
                        <div className="flex items-center gap-2">
                            <div className="shrink-0">
                                <SquareArrowOutUpRight color='blue' />
                            </div>
                            <div className="flex-1 min-w-0 ms-2">
                                <p className="font-medium text-heading truncate">
                                    Layanan
                                </p>
                            </div>
                        </div>
                    </li>
                    <li className="py-4 sm:py-4">
                        <div className="flex items-center gap-2">
                            <div className="shrink-0">
                                <SquareArrowOutUpRight color='blue' />
                            </div>
                            <div className="flex-1 min-w-0 ms-2">
                                <p className="font-medium text-heading truncate">
                                    Pelanggan
                                </p>
                            </div>
                        </div>
                    </li>
                    <li className="py-4 sm:py-4">
                        <div className="flex items-center gap-2">
                            <div className="shrink-0">
                                <SquareArrowOutUpRight color='blue' />
                            </div>
                            <div className="flex-1 min-w-0 ms-2">
                                <p className="font-medium text-heading truncate">
                                    Keunggulan Kami
                                </p>
                            </div>
                        </div>
                    </li>
                    <li className="py-4 sm:py-4">
                        <div className="flex items-center gap-2">
                            <div className="shrink-0">
                                <SquareArrowOutUpRight color='blue' />
                            </div>
                            <div className="flex-1 min-w-0 ms-2">
                                <p className="font-medium text-heading truncate">
                                    Pricelist
                                </p>
                            </div>
                        </div>
                    </li>
                    <li className="py-4 sm:py-4">
                        <div className="flex items-center gap-2">
                            <div className="shrink-0">
                                <SquareArrowOutUpRight color='blue' />
                            </div>
                            <div className="flex-1 min-w-0 ms-2">
                                <p className="font-medium text-heading truncate">
                                    Galeri Instalasi
                                </p>
                            </div>
                        </div>
                    </li>
                    <li className="pt-4 pb-0">
                        <div className="flex items-center gap-2">
                            <div className="shrink-0">
                                <SquareArrowOutUpRight color='blue' />
                            </div>
                            <div className="flex-1 min-w-0 ms-2">
                                <p className="font-medium text-heading truncate">
                                    Kontak Kami
                                </p>
                            </div>
                        </div>
                    </li>
                </ul>
        </div>
    </div>

  )
}

export default HeadJumper