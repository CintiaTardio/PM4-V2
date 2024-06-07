/* eslint-disable @next/next/no-img-element */
import React from "react"
import { CardProps } from "./types"

export const Card: React.FC<CardProps> = ({image, name, price}) => {
    return (
        <div className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl rounded overflow-hidden shadow-lg m-4 p-4 bg-white flex flex-col items-center justify-center">
          <img className="w-50 h-24 object-cover mb-2" 
            src={image} 
            alt="Imagen del producto"
            
            />
          <div className="px-3 py-1 text-center">
            <h1 className="font-bold text-l text-blue-600">{name}</h1>
          </div>

          <div className="px-3 py-1 flex flex-col items-center">
            <p className="rounded-full px-3 py-1 text-m font-bold text-gray-700">€{price}</p>
          </div>
            <button className="bg-blue-500 hover:bg-blue-700 rounded-full px-3 py-1 text-sm font-semibold text-white mb-4">
              Más info
            </button>
        </div>
      )
}
    
export default Card


