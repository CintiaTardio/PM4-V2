import React from "react"


const NotFound = () => { 
    return (
        <div className="flex flex-col items-center justify-center h-screen space-y-4  bg-gray-100">
            <div className="-mt-16 sm:-mt-20 md:-mt-24 lg:-mt-32 xl:-mt-40">
                <div className="flex items-center justify-center">
                    <div className="text-center mr-4">
                        <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl mb-2 text-gray-700">404</h1>
                    </div>

                    <div className="h-[4rem] w-[1px] bg-gray-400 mr-4"></div>

                    <div className="text-sm mb-4 justify-center text-gray-700">Página no encontrada</div>
                </div>
            </div>
        </div>
    )
}

export default NotFound