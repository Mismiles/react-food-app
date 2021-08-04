import CartContext from "./cart-context";

const CartProvider = props => {
    const addItemToCartHandler = item => {};

    const removeItemFromHandler = id => {};


    const cartContext = {
        items: [],
        totalAmount: 0,
        addItem: addItemToCartHandler,
        removeItem: removeItemFromHandler,
    };


    return <CartContext.Provider value={CartContext}>
        {props.children}
    </CartContext.Provider>
};

export default CartProvider;