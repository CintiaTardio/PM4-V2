"use client"
import React, { useEffect, useState } from 'react'
import { IProduct } from '../card/types'
import { getProducts } from '../../helpers/product'


const SearchBar: React.FC = () => {
    const [searchTerm, setSearchTerm] = useState<string>('')
    const [results, setResults] = useState<IProduct[]>([])
    const [ showResults, setShowResults ] = useState<boolean>(false)
  

    useEffect(() => {
        const productGet = async () => {
            if (!searchTerm) {
                setResults([])
                setShowResults(false)
                return
            }

            try {
                const products = await getProducts();
                const filteredProducts = products.filter((product) =>
                product.name.toLowerCase().includes(searchTerm.toLowerCase())
                )
                setResults(filteredProducts)
                setShowResults(filteredProducts.length === 0)
            } catch (error) {
                console.log(error)
            }
        }
            productGet()
        }, [searchTerm])


            function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
            setSearchTerm(event.target.value)
    }

    return (
        <div className="relative z-index scale-55"> 
            <input
                type="text"
                placeholder="Buscar..."
                value={searchTerm}
                onChange={handleChange}
                className="block w-full px-1 py-3 rounded-lg focus:outline-none text-s"
                />
            {showResults && (
                <p className="absolute top-full left-0 z-50 bg-white w-full rounded-b-lg overflow-auto max-h-40 px-4 py-2">
                    Lo sentimos, no se encontraron productos
                </p>
            )}
            <ul className="absolute top-full left-0 z-50 bg-white w-full rounded-b-lg overflow-auto max-h-40">
                {results.map((product) => (
                <li key={product.id}>
                    <a href={`/product/${product.id}`}>{product.name}</a>
                </li>
                ))}
            </ul>
        </div>
    )
}


export default SearchBar
