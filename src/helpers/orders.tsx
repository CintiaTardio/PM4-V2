import { CardProps, IOrder } from '@/components/card/types'

const apiURL = process.env.NEXT_PUBLIC_API_URL

export async function getOrders (token: string) {
    try {
        const res = await fetch(`${apiURL}/users/orders`, {
            method: "GET",
            cache: "no-cache",
            headers: {
                Authorization: token,
                "Content-Type": "application/json",
                'ngrok-skip-browser-warning': 'true',
            }
        })
        const orders = await res.json()
        return orders
    } catch (error: any) {
        throw new Error(error)
    }
}

export async function createOrder (products: number[], token: string) {
    try {
        const res = await fetch(`${apiURL}/orders`, {     
            method: "POST",
            headers: {
                authorization: token,
                "Content-Type": "application/json",
            },
            body: JSON.stringify ({products})
        })
        const orders = await res.json()
        return orders
    } catch (error: any) {
        throw new Error(error)
    }

}

