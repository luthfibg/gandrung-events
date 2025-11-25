import React from 'react'

const TopNav = () => {
  return (
    <nav class="text-white fixed m-8 bg-gray-800 rounded-2xl z-20 top-0 start-0 border-b border-default" style={{width: 'calc(100% - 4rem)'}}>
        <div class="max-w-7xl flex flex-wrap items-center justify-between mx-auto">
            <div className="flex lg:flex-1 flex-2 justify-start py-3 px-5" id="navbar-sticky">
                <ul class="flex flex-col justify-center p-4 md:p-0 mt-4 font-medium border border-default rounded-base md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0">
                    <li>
                        <a href="#" class="block py-2 px-3 text-white bg-brand rounded-sm md:bg-transparent text-white md:p-0" aria-current="page">Home</a>
                    </li>
                    <li>
                        <a href="#" class="block py-2 px-3 text-white rounded hover:bg-neutral-tertiary md:hover:bg-transparent md:border-0 md:hover:text-fg-brand md:p-0 md:dark:hover:bg-transparent">About</a>
                    </li>
                </ul>
            </div>
            <div className="py-3 px-3 flex justify-center  lg:flex-4 flex-2">
                <a href="#" class="flex items-center justify-center space-x-3 rtl:space-x-reverse">
                    <span class="self-center text-white text-xl font-semibold whitespace-nowrap">Gandrung Event</span>
                </a>
            </div>
            <div class="flex justify-end py-3 px-5 lg:flex-1 flex-2" id="navbar-sticky">
                <ul class="flex flex-col justify-center p-4 md:p-0 mt-4 font-medium border border-default rounded-base md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0">
                    <li>
                        <a href="#" class="block py-2 px-3 text-white rounded hover:bg-neutral-tertiary md:hover:bg-transparent md:border-0 md:hover:text-fg-brand md:p-0 md:dark:hover:bg-transparent">Services</a>
                    </li>
                    <li>
                        <a href="#" class="block py-2 px-3 text-white rounded hover:bg-neutral-tertiary md:hover:bg-transparent md:border-0 md:hover:text-fg-brand md:p-0 md:dark:hover:bg-transparent">Contact</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
  )
}

export default TopNav