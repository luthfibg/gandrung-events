import React from 'react'
import { SquareArrowOutUpRight } from 'lucide-react';

const HeadJumper = () => {
  return (
    
    <div class="w-full max-w-sm font-mulish lg:text-2xl p-6 bg-neutral-primary-soft h-fit self-center border border-default rounded-xl shadow-xs">
        <div class="flex items-center justify-between mb-4">
            <h5 class="text-2xl font-semibold leading-none text-heading">Pintasan ke...</h5>
        </div>
        <div class="flow-root">
                <ul role="list" class="divide-y divide-default">
                    <li class="py-4 sm:py-4">
                        <div class="flex items-center gap-2">
                            <div class="shrink-0">
                                <SquareArrowOutUpRight color='blue' />
                            </div>
                            <div class="flex-1 min-w-0 ms-2">
                                <p class="font-medium text-heading truncate">
                                    Produk Sewa
                                </p>
                            </div>
                        </div>
                    </li>
                    <li class="py-4 sm:py-4">
                        <div class="flex items-center gap-2">
                            <div class="shrink-0">
                                <SquareArrowOutUpRight color='blue' />
                            </div>
                            <div class="flex-1 min-w-0 ms-2">
                                <p class="font-medium text-heading truncate">
                                    Layanan
                                </p>
                            </div>
                        </div>
                    </li>
                    <li class="py-4 sm:py-4">
                        <div class="flex items-center gap-2">
                            <div class="shrink-0">
                                <SquareArrowOutUpRight color='blue' />
                            </div>
                            <div class="flex-1 min-w-0 ms-2">
                                <p class="font-medium text-heading truncate">
                                    Pelanggan
                                </p>
                            </div>
                        </div>
                    </li>
                    <li class="py-4 sm:py-4">
                        <div class="flex items-center gap-2">
                            <div class="shrink-0">
                                <SquareArrowOutUpRight color='blue' />
                            </div>
                            <div class="flex-1 min-w-0 ms-2">
                                <p class="font-medium text-heading truncate">
                                    Keunggulan Kami
                                </p>
                            </div>
                        </div>
                    </li>
                    <li class="py-4 sm:py-4">
                        <div class="flex items-center gap-2">
                            <div class="shrink-0">
                                <SquareArrowOutUpRight color='blue' />
                            </div>
                            <div class="flex-1 min-w-0 ms-2">
                                <p class="font-medium text-heading truncate">
                                    Pricelist
                                </p>
                            </div>
                        </div>
                    </li>
                    <li class="py-4 sm:py-4">
                        <div class="flex items-center gap-2">
                            <div class="shrink-0">
                                <SquareArrowOutUpRight color='blue' />
                            </div>
                            <div class="flex-1 min-w-0 ms-2">
                                <p class="font-medium text-heading truncate">
                                    Galeri Instalasi
                                </p>
                            </div>
                        </div>
                    </li>
                    <li class="pt-4 pb-0">
                        <div class="flex items-center gap-2">
                            <div class="shrink-0">
                                <SquareArrowOutUpRight color='blue' />
                            </div>
                            <div class="flex-1 min-w-0 ms-2">
                                <p class="font-medium text-heading truncate">
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