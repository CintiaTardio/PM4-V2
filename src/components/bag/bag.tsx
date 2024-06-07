import React from "react"
import Image from "next/image"
import IconBag from "../../assets/IconBag.png"
import Link from "next/link"


const Bag = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen space-y-4  bg-gray-100">
        <div className="-mt-16 sm:-mt-20 md:-mt-24 lg:-mt-32 xl:-mt-40">
            <Image src={IconBag} alt="Shop" className="h-24 w-24 sm:h-32 sm:w-32 mb-4 mx-auto"/>
            <h1 className="text-center text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl mb-4  text-gray-700">
            No tienes productos en tu carrito</h1>
            <div className="text-center">

            <Link href="/home">
                <button className="bg-blue-500 hover:bg-blue-700 rounded-full px-3 py-1 text-sm font-semibold text-white mb-4">
                Encontrar productos</button></Link>
            </div>

        </div>
    </div>
  )
}

export default Bag