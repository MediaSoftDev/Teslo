'use client'//FIXME: Before using a Hook

import { titleFont } from "@/config/fonts"
import { useUIStore } from "@/store"
import Link from "next/link"
import { IoCartOutline, IoSearchOutline } from "react-icons/io5"


//TODO: Call From @Store
export const TopMenu = () => {
    //TODO: Lateral Menu using Zustand, TailwindCss, Ionics icons and NextJS
    //FIXME: Open Sidebar Menu Function - Effect Slice
    const openSideMenu = useUIStore(state=>state.openSideMenu);
           
    
    return (
        <nav className="flex items-center justify-between px-5 w-full">
            {/* Logo */}
            <div>
                <Link 
                    href="/"
                >
                    <span 
                        className={`
                            ${titleFont.className} 
                            antialiased 
                            font-bold
                        `}
                    >
                        Teslo
                    </span><span> | Shop</span>
                </Link>
            </div>

            {/* Center Menu */}
            <div className="hidden sm:block">
                <Link
                    href="/category/men"
                    className="m-2 p-2 rounded-md transition-all hover:bg-gray-100"
                >
                    Men
                </Link>
                <Link
                    href="/category/women"
                    className="m-2 p-2 rounded-md transition-all hover:bg-gray-100"
                >
                    Women
                </Link>
                <Link
                    href="/category/kid"
                    className="m-2 p-2 rounded-md transition-all hover:bg-gray-100"
                >
                    Kids
                </Link>
            </div>

            {/* Search Cart Menu */}
            <div className="flex items-center">
                <Link
                    href="/search"
                    className="mx-2"
                >
                    <IoSearchOutline className="w-5 h-5 font"/>
                </Link>
                <Link
                    href="/cart"
                    className="mx-2"
                >
                    <div className="relative">
                        <span className="absolute text-xs rounded-full px-1 font-bold -top-2 -right-2 bg-blue-700 text-white">5</span>
                        <IoCartOutline className="w-5 h-5"/>
                    </div>
                </Link>

                <button
                    onClick={openSideMenu} 
                    className="m-2 p-2 rounded-full transition-all hover:bg-gray-100"
                    >
                        Menu   
                </button>
            </div>
            


        </nav>
    )
}
