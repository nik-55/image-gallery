"use client"

import Link from "next/link";
import {usePathname} from "next/navigation";

const Navbar = () => {
    const pathName = usePathname()
  return (
    <div className="bg-slate-700 h-12 text-white flex justify-between items-center p-3">
        <h1>
            Image Gallery
        </h1>
        <ul className="flex">
            <li className={`mx-2 text-blue-400 hover:text-white ${pathName==="/"?"text-yellow-500":""}`}><Link href={"/"}>Home</Link></li>
            <li className={`mx-2 text-blue-400 hover:text-white ${pathName==="/static"?"text-yellow-500":""}`}><Link href={"/static"}>Static</Link></li>
            <li className={`mx-2 text-blue-400 hover:text-white ${pathName==="/server"?"text-yellow-500":""}`}><Link href={"/server"}>Server Side</Link></li>
            <li className={`mx-2 text-blue-400 hover:text-white ${pathName==="/isr"?"text-yellow-500":""}`}><Link href={"/isr"}>ISR</Link></li>
            <li className={`mx-2 text-blue-400 hover:text-white ${pathName==="/client"?"text-yellow-500":""}`}><Link href={"/client"}>Client</Link></li>
        </ul>
    </div>
  )
}

export default Navbar