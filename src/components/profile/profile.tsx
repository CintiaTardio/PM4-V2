"use client"
import { validateLogin } from "@/helpers/formValidation"
import Link from "next/link"
import { useEffect, useState } from "react"
import { LoginErrorProps, LoginProps } from "@/components/card/types"
import { useRouter } from "next/navigation"
import { login } from "@/helpers/auth"
import { CustomToast } from "@/styles/customToast"

const Profile = () => {

    const router = useRouter()

    const [ dataUser, setDataUser ] = useState<LoginProps>({
        email: "",
        password: ""
    })

    const [ errorUser, setErrorUser ] = useState<LoginErrorProps>({
        email: "",
        password: ""
    })

    const [ toucheFields, setToucheFields ] = useState({    
        email: "",
        password: ""
    })

    const handleBlur = (event: React.FocusEvent<HTMLInputElement>) => {
        const {name} = event.target
        setToucheFields({ ...toucheFields, [name] : true })
    }

    //Fc maneja los cambios en los inputs 
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setDataUser({
            ...dataUser,
            [event.target.name]: event.target.value
        })   
    }

    //Envío del form
    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        try {
            const response = await login (dataUser)
            
            //Guardo token + usuario en el localStorage
            const {token, user} = response
            localStorage.setItem("userKey", JSON.stringify({token: token, userData: user}))
            
            CustomToast ("Usuario logueado con éxito", {type: "success"})
            router.push("/dashboard")

        } catch (error: any) {
            throw new Error(error)
        }
    }

    useEffect(() => {
        const errors = validateLogin (dataUser)
        setErrorUser(errors)
    }, [dataUser])


  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">    
        <div className="bg-white shadow-lg rounded-lg p-8 flex flex-col md:flex-row md:space-x-8 w-full max-w-4xl">
        
            <div className="w-full md:w-1/2 flex flex-col items-center mb-8 md:mb-0">
                <h2 className="text-xl font-bold mb-4">Soy nuevo</h2>
                <p className="text-center mb-4">Hazte cliente, y comienza a disfrutar de nuestros beneficios!</p>
                <Link href="/register">
                    <button className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded">
                    Registrarme
                    </button>
                </Link>
            </div>

            
            <div className="hidden md:block w-px bg-gray-300"></div>
            <div className="md:hidden w-full h-px bg-gray-300 mb-8"></div>


            <div className="w-full md:w-1/2 flex flex-col items-center">
                <h2 className="text-xl font-bold mb-4">Soy cliente</h2>
                    <form className="w-full max-w-sm" onSubmit={handleSubmit}>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                            Correo</label>
                            <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="email"
                            type="email"
                            name="email"
                            placeholder="correo@gmail.com"
                            required
                            value={dataUser.email}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            />
                            {toucheFields.email && errorUser.email && <p className="text-red-500 text-xs italic">{errorUser.email}</p>}
                        </div>

                        <div className="mb-6">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                            Contraseña</label>
                            <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                            id="password"
                            type="password"
                            name="password"
                            placeholder="*************"
                            required
                            value={dataUser.password}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            />
                            {toucheFields.password && errorUser.password && <p className="text-red-500 text-xs italic">{errorUser.password}</p>}
                        </div>

                        <div className="flex items-center justify-center">
                            <button className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                            type="submit">
                            Ingresar</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
  )
}

export default Profile