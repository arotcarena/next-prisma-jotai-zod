import { cartAtom } from "@/atoms";
import { product } from "@/generated/prisma";
import { Cart, CartItem } from "@/types/types";
import { useAtom } from "jotai";

export const useCart = (): {
    cart: Cart,
    addToCart: (product: product, quantity: number) => void,
    changeQuantity: (product: product, newQuantity: number) => void,
    removeFromCart: (product: product) => void,
} => {
    const [cart, setCart] = useAtom(cartAtom);

    const handleAddToCart = (
        product: product,
        quantity: number,
    ) => {
        setCart((prevCart: Cart) => {
            const existingItemIndex = prevCart.findIndex((cartItem: CartItem) => cartItem.product.id === product.id);
            
            if (existingItemIndex !== -1) {
                // Product already exists, update quantity
                return prevCart.map((cartItem: CartItem, index: number) => {
                    if (index === existingItemIndex) {
                        return {
                            ...cartItem,
                            quantity: cartItem.quantity + quantity,
                        }
                    }
                    return cartItem;
                });
            } else {
                // Product doesn't exist, add new item
                return [...prevCart, { product, quantity }];
            }
        });
    };

    const handleChangeQuantity = (
        product: product,
        newQuantity: number,
    ) => {
        newQuantity = newQuantity > 0 ? newQuantity : 0;
        
        setCart((prevCart: Cart) => (
            prevCart.map((cartItem: CartItem) => {
                if (cartItem.product.id === product.id) {
                    return {
                        ...cartItem,
                        quantity: newQuantity,
                    }
                }
                return cartItem;
            })
        ))
    };

    const handleRemoveFromCart = (
        product: product,
    ) => {
        setCart((prevCart: Cart) => (
            prevCart.filter((cartItem: CartItem) => cartItem.product.id !== product.id)
        ))
    };
    
    return {
        cart,
        addToCart: handleAddToCart,
        changeQuantity: handleChangeQuantity,
        removeFromCart: handleRemoveFromCart,
    }
}
