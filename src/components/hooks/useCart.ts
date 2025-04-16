import { useContext } from 'react'
import { CartContext } from '../Context/CartContext'

export const useCart = () => {
	const context = useContext(CartContext)
	if (!context) throw new Error("Error")
    return context
  }
  