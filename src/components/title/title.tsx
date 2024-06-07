import React from "react"


const Title = () => {
    return (
        <div className="flex flex-col items-center mt-8 mb-8">
            <div className="w-full text-center text-4xl sm:text-5xl md:text-6xl lg:text-[64px] font-bold mb-4 mt-10">
            #YouMake ofertas exclusivas</div>
            <div className="flex justify-center text-2xl flex-wrap gap-4 sm:gap-6 md:gap-8 lg:gap-10">
                <div className="category-text">Smartphones</div>
                <div className="category-text">Laptops</div>
                <div className="category-text">Tablets</div>
                <div className="category-text">Headphones</div>
                <div className="category-text">Cámaras</div>
                <div className="category-text">Impresoras</div>
                <div className="category-text">Storage</div>
                <div className="category-text">Accessorios</div>
            </div>
        </div>
    )
}

export default Title