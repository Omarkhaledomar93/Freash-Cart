import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const cartContext = createContext()

let headers = { token: localStorage.getItem("userToken") }


export default function CartContextProvider(props) {

    const [numberOfCartItems, setNumberOfCartItems] = useState(0)

    function addToCart(productId) {

        return axios.post("https://ecommerce.routemisr.com/api/v1/cart", {
            productId,
        },
            {
                headers,
            })
            .then((response) => response)
            .catch((error) => error)
    }


    function getLoggedCart() {
        return axios.get('https://ecommerce.routemisr.com/api/v1/cart', {
            headers,
        })
            .then((response) => response)
            .catch((error) => error)
    }

    function deleteSpecificItem(id) {
        return axios.delete(`https://ecommerce.routemisr.com/api/v1/cart/${id}`,
            {
                headers,

            }

        ).then((response) => response)
            .catch((error) => error)
    }

    function updateProdcut(id, count) {
        return axios.put(`https://ecommerce.routemisr.com/api/v1/cart/${id}`,
            {
                count: count,
            },
            { headers }
        )
            .then((response) => response)
            .catch((error) => error)
    }


    async function getCartItems() {
        let { data } = await getLoggedCart()

        setNumberOfCartItems(data.numOfCartItems)
}

    useEffect(() => {
        getCartItems()
    }, [])



    return (<cartContext.Provider value={{
        addToCart,
        getLoggedCart,
        updateProdcut,
        deleteSpecificItem,
        numberOfCartItems,
        setNumberOfCartItems,
    }}>{props.children} </cartContext.Provider>

    )
}