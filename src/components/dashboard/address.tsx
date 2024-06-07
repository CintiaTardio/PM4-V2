"use client"
import React, { useState, useEffect } from "react"
import { userSession } from "@/components/card/types"
import Sidebar from "./sidebar"

const Address = () => {

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
                <h1 className="text-2xl font-nunito mt-8 font-bold">Direcciones</h1>
                    <div className="mt-4 space-y-4 font-nunito">
                        <div className="bg-white p-2 rounded shadow hover:shadow-lg mt-0.5">
                            <p className="mb-4">{userData?.userData?.name}</p>
                            <p>{userData?.userData?.address}</p>

                            </div>      
                    </div>
            </div>
        </div>

    )
}

export default Address