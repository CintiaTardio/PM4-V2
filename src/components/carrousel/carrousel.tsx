import React from "react"
import Image from "next/image"
import { Image1 } from "../../assets"


const Carrousel = () => {
    return (
        <div className="relative w-full h-[500px]">
            <Image
                src={Image1}
                alt="Carrousel Image"
                layout="fill"
                objectFit="cover"
                quality={100}
            />
            <div className="absolute bottom-0 left-0 w-full h-full flex flex-col justify-end items-start p-20">
                <div className="w-[1000px] text-white text-[64px] font-bold">#EnjoyIt</div>
                <div className="w-[1000px] text-white text-2xl font-normal leading-9">Muñecas de colores</div>
            </div>
        </div>
    )
}

export default Carrousel