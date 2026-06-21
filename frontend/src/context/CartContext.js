import { createContext, useState } from "react";

// Create Context
export const CartContext = createContext();


function CartProvider({ children }) {

    // Cart State
    const [card, setCard] = useState([]);
    // Add To Cart
    const addCard = (product) => {

        const existCard = card.find(
            (item) => item._id === product._id
        );

        if (existCard) {

            setCard(
                card.map((item) =>
                    item._id === product._id
                        ? {
                            ...item,
                            quantity: item.quantity + 1
                        }
                        : item
                )
            );

        } else {

            setCard([
                ...card,
                {
                    ...product,
                    quantity: 1
                }
            ]);

        }

    };

    // Total Price
    const totalPrice = card.reduce(
        (total, item) =>
            total + item.price * item.quantity,
        0
    );
    const removeFormCard = (Item) => {
        setCard(card.filter((card)=>card._id !== Item._id));
    }
    return (

        <CartContext.Provider
            value={{
                card,
                addCard,
                totalPrice,
                removeFormCard
            }}
        >

            {children}

        </CartContext.Provider>

    );
}
export default CartProvider;
