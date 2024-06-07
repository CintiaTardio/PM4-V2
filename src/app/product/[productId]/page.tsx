"use client"
import { CardProps } from '@/components/card/types'
import ProductDetail from '@/components/product/product'
import { getProductById } from '@/helpers/product'
import React, { useEffect, useState } from 'react'


const ProductPage = ({params} : {params: {productId: string}}) => {
    
    const [product, setProduct] = useState<CardProps | null>(null)

    //Se ejecuta cuando el componente se monta y cada vez que params.id cambia
    useEffect (() => {
        const fetchData = async () => {
            try {
                const product = await getProductById(params.productId)
                setProduct(product)
            } catch (error: any) {
                console.error(error)
            }
        }

        fetchData()
    }, [params.productId])
    

    return (
        <div>
            {product && (
                <ProductDetail 
                id={product.id}
                name={product.name}
                description={product.description}
                price={product.price}
                stock={product.stock}
                image={product.image}
                catgoryId={product.catgoryId}
                />
            )}
        </div>
    )
}

export default ProductPage

