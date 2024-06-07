"use client"
import React, { useState, useEffect} from "react"
import { userSession } from "../card/types"
import { usePathname } from "next/navigation"
import Link from "next/link"
import Image from "next/image"
import { IconProfile, IconBox, IconTruck, IconBag } from "@/assets"
import { CustomToast } from "@/styles/customToast"

const Sidebar = () => {

    const [ userData, setUserData ] = useState<userSession | null>(null)
    const pathname = usePathname()
   
    const handleLogout = () => {
        localStorage.removeItem("userKey")
        CustomToast ("Cesión finalizada", {type: "info"})

        setUserData(null)
        window.location.href = "/home"
      }
    
      useEffect(() => {
        if (typeof window !== "undefined" && window.localStorage) {
          const userData = localStorage.getItem("userKey")
          setUserData(JSON.parse(userData!))
        }
      }, [pathname])


    return (
        <div className="hidden md:block md:w-1/4 bg-white shadow-md p-8">
            <div>
                <h2 className="text-2xl font-bold mb-4 mt-12">Mi cuenta</h2>
                <ul className="text-xl font-semibold space-y-2">

                    <li className="p-2 hover:text-blue-500 flex items-center">
                      <Link href="/dashboard/contact-data" className="flex items-center">
                      <Image src={IconProfile} alt="user" width={20} height={20} className="mr-2"/>Mis datos de contacto</Link>
                    </li>
                    
                    <li className="p-2 hover:text-blue-500 flex items-center">
                    <Link href="/dashboard/address" className="flex items-center">
                    <Image src={IconBox} alt="user" width={20} height={20} className="mr-2"/>Mis direcciones</Link>
                    </li>

                    <li className="p-2 hover:text-blue-500 flex items-center">
                    <Link href="/dashboard/bag" className="flex items-center">
                    <Image src={IconBag} alt="user" width={20} height={20} className="mr-2"/>Mi carrito</Link>
                    </li>

                    <li className="p-2 hover:text-blue-500 flex items-center">
                    <Link href="/dashboard/orders" className="flex items-center">
                    <Image src={IconTruck} alt="user" width={20} height={20} className="mr-2"/>Mis pedidos</Link>
                    </li>

                </ul>
                    <button className="bg-blue-500 hover:bg-blue-700 rounded-full px-4 py-1 mt-4 text-sm font-semibold text-white mb-4 cursor-pointer ml-2"
                    onClick={handleLogout}>Cerrar sesión</button>
            </div>
        </div>
    )
}

export default Sidebar