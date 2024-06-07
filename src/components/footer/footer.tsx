const Footer = () => { 

    return (
        <footer className="bg-white rounded-lg shadow m-4 dark:bg-gray-800">
            <div className="w-full mx-auto max-w-screen-xl p-4 flex flex-col items-center justify-center md:flex-row md:items-center md:justify-between">
                <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400 mb-3 md:mb-0 md:mr-6">
                    ©2024 <a href="/" className="hover:underline font-bold">smart.</a> Todos los derechos reservados.
                </span>
                <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
                    <li>
                        <a href="#" className="hover:underline me-4 md:me-6">Aviso Legal</a>
                    </li>
                    <li>
                        <a href="#" className="hover:underline me-4 md:me-6">Política de privacidad</a>
                    </li>
                    <li>
                        <a href="#" className="hover:underline me-4 md:me-6">Mapa del sitio</a>
                    </li>
                    <li>
                        <a href="#" className="hover:underline">Contacto</a>
                    </li>
                </ul>
            </div>
        </footer>
    )
}

export default Footer