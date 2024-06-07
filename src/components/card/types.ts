export interface CardProps { 
    id: number
    name: string
    description: string
    price: number
    stock: number
    image: string
    catgoryId?: number
}


export interface ICategory {
    name: string
}


export interface IProduct {
    name: string
    id?: number | string
}


export interface LoginProps {
    email: string
    password: string
}


export interface LoginErrorProps {
    email?: string
    password?: string
}


export interface RegisterProps {
    email: string
    password: string
    name: string
    address: string
    phone: string
}


export interface RegisterErrorProps {
    email?: string
    password?: string
    name?: string
    address?: string
    phone?: string
}


export interface userSession {
    token: string
    userData: {
        id: number
        email: string
        password: string
        name: string
        address: string
        phone: string
        role: string
        orders: []
    }
}


export interface IOrder {
    id: number
    status: string
    date: Date
    products: CardProps[]
}