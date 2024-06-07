import { CardProps } from "@/components/card/types"
import dotenv from "dotenv"
dotenv.config()

const apiUrl = process.env.NEXT_PUBLIC_API_URL

export async function getProducts () {
    try {
        const res = await fetch(`${apiUrl}/products`, {
        method: 'GET',
        headers: {
            'ngrok-skip-browser-warning': 'true',
          },
        next: {revalidate:3600}
    })
        //Parsea la respuesta en un objeto json, y la rta se tipa como CardProps
        const products: CardProps[] = await res.json()
        return products
    } catch (error: any) {
        throw new Error(error)
    }
}

export async function getProductById (id: string) {
    try {
        const products = await getProducts()
        const product = products.find(product => product.id?.toString() === id)
        if (!product) throw new Error('Producto no encontrado')
        return product
    } catch (error: any) {
        throw new Error(error)
    }
}