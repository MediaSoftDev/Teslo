import { titleFont } from "@/config/fonts"
import Link from "next/link"

export const Footer = () => {
  return (
    <div className="flex justify-center w-full text-xs mb-10">
        <Link
            href="/"
        >
            <span className={
                `${titleFont.className} antialiased font-semibold`
            }>Teslo</span>   
            <span>| shop</span>
            <span>© {new Date().getFullYear()}</span>     
        </Link>
        <Link 
            href="/"
            className="mx-3"
        >
            Privacy & Legal
        </Link>
        <Link 
            href="/"
            className="mx-3"
        >
            Locations
        </Link>
    </div>
  )
}
