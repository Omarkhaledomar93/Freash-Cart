import axios from "axios";
import { createContext } from "react";

export const cartContext = createContext()

let headers = { token: localStorage.getItem("userToken") }


export default function CartContextProvider(props) {


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


    return (<cartContext.Provider value={{ addToCart, getLoggedCart, updateProdcut }}>{props.children} </cartContext.Provider>

    )
}