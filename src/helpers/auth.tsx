import { CardProps, LoginProps, RegisterProps } from "@/components/card/types"

const apiUrl = process.env.NEXT_PUBLIC_API_URL

//Registro de usuario - POST hace registro de usuario al backend
export async function register (userData: RegisterProps) {
    try {
        const res = await fetch(`${apiUrl}/users/register`, {
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(userData)
    })
        console.log(res)
        if(res.ok){
            return res.json()
        } else {
            throw new Error(`Error en el registro: ${res.statusText}`)
        }

    } catch (error: any) {
        throw new Error(error)
    }
}


//Registro de usuario - POST hace registro de usuario al backend
export async function login (userData: LoginProps) {
    try {
        const res = await fetch(`${apiUrl}/users/login`, {
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(userData)
    })
        console.log(res)
        if(res.ok){
            return res.json()
        } else {
            throw new Error('Error en el login')
        }

    } catch (error: any) {
        throw new Error(error)
    }
}
