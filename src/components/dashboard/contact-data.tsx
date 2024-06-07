"use client"
import React, { useState, useEffect } from "react"
import { userSession } from "@/components/card/types"
import Sidebar from "./sidebar"

const Contact = () => {

    const [ userData, setUserData ] = useState<userSession>()

    useEffect(() => {
        if (typeof window !== "undefined" && window.localStorage) {
            const userData = localStorage.getItem("userKey")
            setUserData(JSON.parse(userData!))
        }
    }, [])

    return (
        <div className="flex flex-col md:flex-row h-screen">
            <Sidebar />

            <div className="w-full md:w-3/4 p-4 md:p-12">
                <h1 className="text-2xl font-nunito mt-8 font-bold">Datos de contacto</h1>
                    <div className="mt-4 space-y-4 font-nunito">
                        <p className="text-sm text-gray-400">Nombre</p>
                        <div className="bg-white p-2 rounded shadow hover:shadow-lg mt-0.5"><p>{userData?.userData?.name}</p></div>   
                        <p className="text-sm text-gray-400">Email</p>     
                        <div className="bg-white p-2 rounded shadow hover:shadow-lg mt-0.5"><p>{userData?.userData?.email}</p></div>  
                        <p className="text-sm text-gray-400">Teléfono</p>      
                        <div className="bg-white p-2 rounded shadow hover:shadow-lg -mt-0.5"><p>{userData?.userData?.phone}</p></div>   
                    </div>
            </div>
        </div>

    )
}

export default Contact