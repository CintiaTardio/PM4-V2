/* eslint-disable @next/next/no-img-element */
"use client"
import React, { useState, useEffect } from "react"
import { CardProps, userSession } from "../card/types"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { CustomToast } from "@/styles/customToast"


const ProductDetail : React.FC<CardProps> = (props)=> {

  const router = useRouter()
  const [userData, setUserData] = useState<userSession | null>(null)
  

  useEffect(() => { 
    if (typeof window !== "undefined" && window.localStorage) {
      const userData = localStorage.getItem("userKey")
      setUserData(JSON.parse(userData!))
    }
  }, [])
  

  const handleBuy = (e: any) => {
      if (!userData?.token) {
        alert("Debes iniciar sesión para comprar")
        router.push("/profile")
      } else {
        const cart = JSON.parse(localStorage.getItem("cart") || "[]") 
        const productExist = cart.some((product: CardProps) => {
        if (product.id === Number(e?.target?.id)) return true;
        return false;
    })

        if(productExist){
          CustomToast ("El producto ya esta en el carrito", {type: "warning"})
          router.push("/dashboard/bag")
          
        } else {
            cart.push(props)
            localStorage.setItem("cart", JSON.stringify(cart))    
            CustomToast ("Producto añadido al carrito", {type: "success"})
            router.push("/dashboard/bag") 
        }
      }
    }

    return (
      <div className="bg-gray-100">
          <div className="card flex justify-between items-center p-6 rounded-md">
              <div className="grid grid-cols-2 w-full">
                  <div className="col-span-1">
                      <Link href="/home"><span className="mr-4 text-gray-400 text-4xl">&#60;</span></Link>
                  </div>
                  <div className="col-span-1 text-right">
                      <h1 className="flex-grow text-gray-600 text-4xl sm:text-5xl md:text-6xl lg:text-[64px] font-bold mb-8 text-right">
                  #TechBuys</h1>
                  </div>
              </div>
          </div>

      <div className="flex flex-col md:flex-row items-center justify-center">
        <div className="w-full md:w-1/2 max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl rounded overflow-hidden shadow-lg m-4 p-4 bg-white">
            <div className="w-full flex justify-center items-center">
                <img
                src={props?.image}
                alt={`Imagen del producto ${props.name}`}
                className="w-1/2 md:w-2/3 lg:w-1/3 h-auto mb-4 rounded-lg"
                />
            </div>
        </div>
        <div className="w-full md:w-1/2 max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl rounded overflow-hidden shadow-lg m-4 p-4 bg-white">
            <div className="w-full md:w-full lg:w-full">
              <h2 className="font-bold text-xl text-blue-600">{props.name}</h2>
              <p className="text-xs mt-2 mb-2">{props.description}</p>

              <div className="flex justify-between mt-2">
                <p className="rounded-full text-xl font-bold mt-2 text-gray-700">€{props.price}</p>
                
                <button id={props.id.toString()} onClick={handleBuy} className="bg-blue-500 hover:bg-blue-700 rounded-full px-3 py-1 text-sm font-semibold text-white mt-2">
                Añadir</button>
              </div>
            </div>
        </div>
      </div>
      </div>
  )
}

export default ProductDetail


