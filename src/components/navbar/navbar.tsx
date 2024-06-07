"use client"
import Image from "next/image"
import Link from "next/link"
import { useState, useEffect } from "react"
import { userSession } from "@/components/card/types"
import { usePathname } from "next/navigation"
import { IconBag, IconLike, IconProfile, IconHamb, IconData, LogoC } from "../../assets"
import SearchBar from "../search/search"

const Navbar = () => {

    const [ navMenuOpen, setnavMenuOpen ] = useState(false)
    const [ userName, setUserName ] = useState<string>("")
    const [ desplegableOpen , setDesplegableOpen ] = useState(false)
    const [ userData, setUserData ] = useState<userSession | null>(null)
    const pathname = usePathname()

    const toggleDesplegable = () => {setDesplegableOpen(!desplegableOpen)}
    const toggleNavMenu = () => {setnavMenuOpen(!navMenuOpen)}

    //Recupero datos del localStorage, y parseo de nuevo a JSON (modificar por contexto)
    useEffect(() => {
        if (typeof window !== "undefined" && window.localStorage) {
            const userData = localStorage.getItem("userKey") 
            setUserData(JSON.parse(userData!))
        }
    }, [pathname])
    console.log(userData)

    useEffect(() => {
        if (userData && userData.userData && userData.userData.name) {
            const [ firstName ] = userData.userData.name.split(" ")
          setUserName(firstName)
        }
      }, [userData])

      const handleLogout = () => {
        localStorage.removeItem("userKey");
        setUserData(null);
        window.location.href = "/home"
      }

      return (
        <nav className="w-screen h-[60px] px-4 sm:px-8 md:px-12 pt-2 pb-2 bg-white flex justify-between items-center">
            <div className="flex items-center">
                <Link href={userData && userData.token ? "/dashboard" : "/home"}>
                <div className="mr-1"><Image src={LogoC} alt="Icono" width={100}/></div></Link>
            </div>

                {userData && userData.token ? (
                    <div className="flex items-center justify-end space-x-8">
                        <h1 className="mr-auto">Bienvenid@ {userName}</h1>

                        <div className="relative">
                            <Image src={IconData} alt="Perfil del usuario" className="h-6 w-6 cursor-pointer"onClick={toggleDesplegable}/>

                            {desplegableOpen && (
                                <div className="absolute right-0 mt-6 w-48 bg-white border border-gray-200 shadow-lg"
                                    onMouseEnter={() => setDesplegableOpen(true)}
                                    onMouseLeave={() => setDesplegableOpen(false)}>

                                    <Link href="/dashboard/contact-data"><div className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                                    Mis datos de contacto</div></Link>
                                    <hr className="border-gray-200" />
                                    <Link href="/dashboard/address"><div className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                                    Mis direcciones</div></Link>
                                    <hr className="border-gray-200"/>
                                    <Link href="/dashboard/bag"><div className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                                    Mi carrito</div></Link>
                                    <hr className="border-gray-200"/>
                                    <Link href="/dashboard/orders"><div className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                                    Mis pedidos</div></Link>
                                    <hr className="border-gray-200" />

                                    <button className="bg-blue-500 hover:bg-blue-700 rounded-full px-4 py-1 mt-2 text-sm font-semibold text-white mb-4 cursor-pointer ml-4"onClick={handleLogout}
                                    >Cerrar sesión</button>
                                </div>
                            )}
                        </div>
                    </div>
                ) : (
                    <>
                        <div className="hidden md:flex space-x-8 ml-auto items-center">

                            <div><SearchBar /></div>
                            <Link href="/cart"><Image src={IconBag} alt="Bag" className="h-6 w-6 cursor-pointer"/></Link>
                            <Link href="/fav"><Image src={IconLike} alt="Favorite" className="h-6 w-6 cursor-pointer"/></Link>
                            <Link href="/profile"><Image src={IconProfile} alt="Login" className="h-6 w-6 cursor-pointer"/></Link>

                            <div className="md:hidden flex items-center">
                                <button onClick={toggleNavMenu} className="focus:outline-none"><Image src={IconHamb} alt="Menu" className="h-6 w-6 cursor-pointer"/></button>
                            </div>
                        </div>
                    </>
                )}

            {(navMenuOpen || !userData?.token) && (
                <div className="md:hidden absolute top-[60px] right-0 w-full bg-white shadow-lg z-50 flex flex-col items-center space-y-4 p-4">
                    {!userData?.token && <Link href="/cart"><Image src={IconBag} alt="Bag" className="h-6 w-6 cursor-pointer"/></Link>}
                    {!userData?.token && <Link href="/fav"><Image src={IconLike} alt="Favorite" className="h-6 w-6 cursor-pointer"/></Link>}
                    {!userData?.token && <Link href="/profile"><Image src={IconProfile} alt="Login" className="h-6 w-6 cursor-pointer"/></Link>}
                </div>
            )}
        </nav>
    )
}

export default Navbar