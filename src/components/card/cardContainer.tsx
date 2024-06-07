"use client"
import Card from "./card"
import ProductExample from "../../helpers/products"
import { useState, useEffect } from "react"
import Link from "next/link"


const CardContainer = () => {

    //CardIndex rastrea carrousel
    const [CardIndex, setCardIndex] = useState(0)
    const [ItemsxPage, setItemsxPage] = useState (5)
  
    //Funciones para moverse en el carrousel de cards
    const handlePrevClick = () => {
      setCardIndex ((prevIndex) => Math.max(prevIndex - ItemsxPage, 0))}

    const handleNextClick = () => {
      setCardIndex ((prevIndex) => Math.min(prevIndex + ItemsxPage, ProductExample.length - ItemsxPage))}

    const actualProducts = ProductExample.slice(CardIndex, CardIndex + ItemsxPage)


    //Actualiza la cantidad de items por página en función del tamaño de la pantalla
    useEffect(() => {
      const updateItemsxPage = () => {
        if (window.innerWidth < 640) {
          setItemsxPage(1)
        } else {
          setItemsxPage(5)
        }
      }

      updateItemsxPage()
      window.addEventListener('resize', updateItemsxPage)

      return () => window.removeEventListener('resize', updateItemsxPage)
    
  }, [])

  
  return (

      <div className="container mx-auto px-4 py-8 flex justify-center items-center">
        <button
          onClick={handlePrevClick}
          disabled={CardIndex === 0}
          className="p-2 mr-2 bg-gray-300 rounded disabled:opacity-50"
        > &lt;
        </button>

      <div className="w-full overflow-hidden">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 justify-center">
          {actualProducts.map((product) => {
            return (
              <Link key={product.id} href={`/product/${product.id}`}>
                <Card key={product.id} {...product}/></Link>
            )
          })}
        </div>
      </div>

      <button
        onClick={handleNextClick}
        disabled={CardIndex + ItemsxPage >= ProductExample.length}
        className="p-2 ml-2 bg-gray-300 rounded disabled:opacity-50"
      > &gt;
      </button>
    </div>
  )
}


export default CardContainer