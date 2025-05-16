import { createContext, useEffect, useState } from "react";
import { products } from "../assets/assets";
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'

export const ShopContext = createContext();

const ShopContextProvider = (props) => {
    const currency = '$';
    const delivery_fee = 10;
    const [search, setSearch] = useState('');
    const [showSearch, setShowSearch] = useState(false)
    const navigate = useNavigate(); // Add this line to get the navigate function

    const [cartItems, setCartItems] = useState(() => {
        const savedCart = localStorage.getItem('cartItems')
        return savedCart ? JSON.parse(savedCart) : {}
    })
    useEffect(() => {
        localStorage.setItem('cartItems', JSON.stringify(cartItems))
    }, [cartItems])

    const addToCart = (itemId, size, quantity = 1, isUpdate = false) => {
        if (!size && !isUpdate) {
            toast.error('Select Product Size')
            return;
        }

        let cartData = structuredClone(cartItems)

        if (isUpdate) {
            if (cartData[itemId]) {
                cartData[itemId][size] = quantity
            } else {
                cartData[itemId] = {}
                cartData[itemId][size] = quantity
            }
        } else {
            if (cartData[itemId]) {
                if (cartData[itemId][size]) {
                    cartData[itemId][size] += quantity
                } else {
                    cartData[itemId][size] = quantity
                }
            } else {
                cartData[itemId] = {}
                cartData[itemId][size] = quantity
            }
        }

        setCartItems(cartData)
        
        if (!isUpdate) {
            toast.success('Added to cart')
        }
    }

    const removeFromCart = (itemId, size) => {
        let cartData = structuredClone(cartItems)
        
        if (cartData[itemId] && cartData[itemId][size]) {
            cartData[itemId][size] = 0
            
            const allSizesZero = Object.values(cartData[itemId]).every(qty => qty === 0)
            if (allSizesZero) {
                delete cartData[itemId]
            }
            
            setCartItems(cartData)
            toast.info('Item removed from cart')
        }
    }

    const getCartCount = () => {
        let totalCount = 0;
        for (const items in cartItems) {
            for (const item in cartItems[items]) {
                try {
                    if (cartItems[items][item] > 0) {
                        totalCount += cartItems[items][item];
                    }
                } catch (error) {
                }
            }
        }
        return totalCount
    }

    const value = {
        products, 
        currency, 
        delivery_fee, 
        search, 
        setSearch, 
        showSearch, 
        setShowSearch, 
        cartItems, 
        addToCart,
        removeFromCart,
        getCartCount,
        navigate  // Add navigate to the context value
    }

    return (
        <ShopContext.Provider value={value}>
            {props.children}
        </ShopContext.Provider>
    )
}

export default ShopContextProvider