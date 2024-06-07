"use client"
import React, { useState, useEffect } from "react"
import { userSession } from "@/components/card/types"
import Sidebar from "./sidebar"
import Link from "next/link"
import { useRouter, redirect } from "next/navigation"
import { CardProps } from "@/components/card/types"
import { createOrder } from "@/helpers/orders"
import { CustomToast } from "@/styles/customToast"



const Bag = () => {

    const router = useRouter()
    const [ bag, setBag ] = useState<CardProps[]>([])
    const [ total, setTotal ] = useState<number>(0)
    const [ userData, setUserData ] = useState<userSession>()


    useEffect(() => {
        if (typeof window !== "undefined" && window.localStorage) {
            const userData = localStorage.getItem("userKey")
            setUserData(JSON.parse(userData!))
        }
    }, [])

   
    const clearCart = () => {
        localStorage.removeItem("cart")
        setBag([])
        setTotal(0)
    }

    useEffect(() => { 
        if (typeof window !== "undefined" && window.localStorage) {
          const userData: userSession = JSON.parse(localStorage.getItem("userKey")!)
          setUserData(userData)
          !userData?.token && redirect("/dashboard/orders")
        }

        const storeBag = JSON.parse(localStorage.getItem("cart") || "[]")
        if (storeBag) {
            let totalBag = 0
            storeBag.map((item: CardProps) => {
                totalBag = totalBag + item.price
            })
            setTotal (totalBag)
            setBag (storeBag)
        }
      }, [])
      console.log(bag)


    const handleOrderNow = async () => {
        try {
            if (userData?.token) {
                console.log(userData.token)
                const products = bag.map((product) => product.id)
                const response = await createOrder(products, userData.token)
                
                CustomToast ("Compra realizada con éxito", {type: "success"})
                setBag([])
                setTotal(0)
                clearCart()
                router.push("/dashboard/orders")
            }
        } catch (error: any) {
            console.error(error)
        }
    }


    return (
        <div className="flex flex-col md:flex-row h-screen">
            <Sidebar />
    
            <div className="flex flex-col md:flex-row w-full md:w-3/4 p-4 md:p-12 space-y-8 md:space-y-0 md:space-x-8">
                <div className="flex-1 bg-white p-4 rounded shadow hover:shadow-lg self-start">
                    <h1 className="text-2xl font-nunito mt-4 font-bold">Productos en el carrito</h1>
                    <div className="mt-4 space-y-4 font-nunito">
                        {bag?.length > 0 ? (
                            <div className="space-y-4">
                                {bag?.map((order) => {
                                    return (
                                        <div key={order.id}>
                                            <div className="flex justify-between items-center">
                                            <p>{order.name}</p>
                                            <p>€{order.price}</p>
                                            </div>
                                        </div>
                                    )
                                })}
                            </div>
                        ) : (
                            <div>
                                <div className="text-lg">No tienes productos en el carrito</div>
                            </div>
                        )}
                        <div className="flex justify-end mt-4">
                            <Link href="/dashboard"><button className="bg-gray-500 hover:bg-gray-700 rounded-full px-4 py-2 text-sm font-semibold text-white cursor-pointer">
                            Seguir comprando</button>
                            </Link>
                        </div>
                    </div>
                </div>
    
                <div className="flex-1 bg-white p-4 rounded shadow hover:shadow-lg self-start">
                    <h1 className="text-2xl font-nunito mt-4 font-bold">Resumen del pedido</h1>
                    <div className="mt-4 space-y-4 font-nunito">
                        <div className="flex justify-between">
                            <p>Total productos</p>
                            <p>€{total}</p>
                        </div>
                    </div>

                    <div className="flex justify-end mt-4">
                        <button className="bg-gray-700 hover:bg-gray-900 rounded-full px-4 py-2 text-sm font-semibold text-white cursor-pointer" 
                        onClick={handleOrderNow}>Finalizar compra</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Bag