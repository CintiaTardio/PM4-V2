import { LoginErrorProps, LoginProps } from "@/components/card/types"
import { RegisterProps, RegisterErrorProps } from "@/components/card/types"

export function validateLogin (values: LoginProps) {
    let errors: LoginErrorProps = {}

    if(!values.email) {
        errors.email = 'El email es obligatorio'
    } else if (!values.password) {
        errors.password = 'La contraseña es obligatoria'
    } else if (values.password.length < 8) {
        errors.password = 'La contraseña debe ser de al menos 8 caracteres'
    }
    return errors
}


export function validateRegister (values: RegisterProps) {
    let errors: RegisterErrorProps = {}

    if (!values.name) {  
        errors.name = 'El nombre es obligatorio'
    } else if (values.name.length < 3) {
        errors.name = 'El nombre es muy corto'
    }

    if (!values.address) { 
    errors.address = 'La dirección es obligatoria'
    }

    if (!values.phone) { 
        errors.phone = 'El teléfono es obligatorio'
    }

    if(!values.email) {
        errors.email = 'El email es obligatorio'
    }
    
    if (!values.password) {
        errors.password = 'La contraseña es obligatoria'
    } else if (values.password.length < 8) {
        errors.password = 'La contraseña debe ser de al menos 8 caracteres'
    }

    return errors
}