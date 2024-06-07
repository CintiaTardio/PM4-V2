"use client"
import React, { useEffect, useState } from "react"
import { userSession, IOrder } from "@/components/card/types"
import { getOrders } from "@/helpers/orders"
import Link from "next/link"
import Sidebar from "@/components/dashboard/sidebar"


const Orders = () => {

      const [ userData, setUserData ] = useState<userSession>()
      const [ orders, setOrders ] = useState<IOrder[]>([])

      //Se monto, y se setea el token en el localStorage
      useEffect(() => { 
          if (typeof window !== "undefined" && window.localStorage) {
          const userData = localStorage.getItem("userKey")
          setUserData(JSON.parse(userData!))
          }
    }, [])

      //Como se entero que cambio el estado, volve a ejecutarte y busca la info
      useEffect(() => {
        const fetchData = async () => {
        const ordersResponse = await getOrders(userData?.token!)
        setOrders(ordersResponse)
        }
        userData?.token && fetchData()
    }, [userData?.token])


  return (
    <div className="flex flex-col md:flex-row h-screen">
            <Sidebar />
            
        <div className="w-full md:w-3/4 p-4 md:p-12">
            <h1 className="text-2xl font-nunito mt-8 font-bold">Pedidos</h1>
            <p>Accede al historial de tus pedidos para ver todos los detalles</p>
                <div className="mt-4 space-y-4 font-nunito">
                <div className="bg-white p-2 rounded shadow hover:shadow-lg mt-0.5">

                  <div>
                    {orders?.length > 0 ? (
                        orders?.map((order) => {
                          return (
                            <div key={order.id}>
                              <div className="flex justify-start space-x-24">
                                <p>Fecha: {new Date(order.date).toLocaleDateString()}</p>
                                <p>Estado: {order.status}</p>
                              </div>
                            </div>
                          )
                        })
                 ) : (
                            <div>
                                <div className="text-lg">No tienes pedidos realizados</div>
                                <Link href="/dashboard"><button>Comprar</button></Link>
                            </div>
                          )
                        }
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Orders