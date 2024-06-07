"use client"
import { validateRegister } from "@/helpers/formValidation"
import { useEffect, useState } from "react"
import { RegisterProps, RegisterErrorProps } from "@/components/card/types"
import { useRouter } from "next/navigation"
import { register } from "@/helpers/auth"
import Link from "next/link"

const Register = () => {

    const router = useRouter()

    const [ dataUser, setDataUser ] = useState<RegisterProps>({
        name: "",
        address: "",
        phone: "",
        email: "",
        password: ""
    })

    const [ errorUser, setErrorUser ] = useState<RegisterErrorProps>({
        name: "",
        address: "",
        phone: "",
        email: "",
        password: ""
    })

    const [ toucheFields, setToucheFields ] = useState({
        name: "",
        address: "",
        phone: "",
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

    //Envío de form
    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        try {
            console.log(dataUser)
            const response = await register (dataUser) 
    
            //Redirigir usuario e informar resultado operación
            alert ("Usuario registrado con éxito")
            router.push("/profile")
        } catch (error: any) {
            console.log("Error al registrar usuario", error)
            throw new Error(error)
        }
    }

        useEffect(() => {
            const errors = validateRegister (dataUser)
            setErrorUser(errors)
        } , [dataUser])


  return (
        <div className="bg-gray-100">
            <div className="flex justify-between items-center p-6 rounded-md">
                <Link href="/profile"><span className="inline-block text-gray-400 text-4xl">&#60;</span></Link>
            </div>
  
        <div className="flex flex-col items-center justify-center space-y-2">
            <h2 className="text-xl font-bold">Soy nuevo</h2>
            <p>Por favor completa tus datos</p>
                
                <form className="w-full max-w-md mt-6" onSubmit={handleSubmit}>   
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                        Nombre</label>
                        <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-2 leading-tight focus:outline-none focus:shadow-outline"
                        id="name"
                        type="name"
                        name="name"
                        placeholder="Cómo te llamas?"
                        required
                        value={dataUser.name}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        />
                        {toucheFields.name && errorUser.name && <p className="text-red-500 text-xs italic">{errorUser.name}</p>}
                    </div>

                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="adress">
                        Dirección</label>
                        <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-2 leading-tight focus:outline-none focus:shadow-outline"
                        id="address"
                        type="address"
                        name="address"
                        placeholder="Dónde vivís?"
                        required
                        value={dataUser.address}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        />
                        {toucheFields.address && errorUser.address && <p className="text-red-500 text-xs italic">{errorUser.address}</p>}
                    </div>

                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="phone">
                        Teléfono</label>
                        <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-2 leading-tight focus:outline-none focus:shadow-outline"
                        id="phone"
                        type="phone"
                        name="phone"
                        placeholder="(+34) Teléfono"
                        required
                        value={dataUser.phone}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        />
                        {toucheFields.phone && errorUser.phone && <p className="text-red-500 text-xs italic">{errorUser.phone}</p>}
                    </div>

                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email-adress">
                        Email</label>
              
                        <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-2 leading-tight focus:outline-none focus:shadow-outline"
                        id="email-adress"
                        type="email"
                        name="email"
                        placeholder="Email"
                        required
                        value={dataUser.email}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        />
                        {toucheFields.email && errorUser.email && <p className="text-red-500 text-xs italic">{errorUser.email}</p>}
                    </div>

                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                        Contraseña</label>
                        <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-2 leading-tight focus:outline-none focus:shadow-outline"
                        id="password"
                        type="password"
                        name="password"
                        placeholder="Contraseña (mínimo 8 caracteres)"
                        required
                        value={dataUser.password}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        />
                        {toucheFields.password && errorUser.password && <p className="text-red-500 text-xs italic">{errorUser.password}</p>}
                    </div>

                    <div className="flex items-center justify-center">
                        <button className="bg-gray-500 hover:bg-gray-700 text-white mb-2 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        type="submit">
                        Enviar</button>
                    </div>
                </form>
        </div>
        </div>

    )
}

export default Register