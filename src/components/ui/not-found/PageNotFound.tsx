import { titleFont } from "@/config/fonts"
import Image from "next/image"
import Link from "next/link"

export const PageNotFound = () => {
  return (
    <div className="flex justify-center items-center flex-col-reverse md:flex-row h-[800px] w-full align-middle">
        <div className="px-5 mx-5">
            <h2 className={`${titleFont.className} antialiased text-9xl`}>404</h2>
            <p className="font-semibold text-xl">Whoops! We are so sorry.</p>
            <p className="font-light">
                <span>
                You can return to the 
                </span>
                <Link
                    href="/"
                    className="font-normal hover:underline transition-all"
                >&nbsp;beginning</Link>
            </p>
        </div>

        <div className="px-5 mx-5">
            <Image 
                src="/imgs/starman_750x750.png"
                alt="Starman"
                className="p-5 sm:p-0"
                width={550}
                height={550}
            />
        </div>


    </div>
  )
}
