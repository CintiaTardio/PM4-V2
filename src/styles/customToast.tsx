import { toast, Bounce } from 'react-toastify'


export const CustomToast = (message: string, options: object = {}) => {
  toast(message, {
    position: "bottom-right", 
    autoClose: 3000, 
    hideProgressBar: true, 
    transition: Bounce,
    style: { 
      background: "white",
      color: "black",
      fontSize: "14px"
    },
    ...options
  })
}

export default CustomToast