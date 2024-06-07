import React from "react"
import CardContainer from "../card/cardContainer"
import TitleDash from "../title/titleDash"


const Dashboard = () => { 
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
        <div className="-mt-12 sm:-mt-16 md:-mt-20 lg:-mt-24 xl:-mt-28 flex flex-col items-center">
            <TitleDash />
            <CardContainer />            
        </div>
    </div>
    )
}

export default Dashboard