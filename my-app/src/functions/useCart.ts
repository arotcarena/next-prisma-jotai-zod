import { cartAtom } from "@/atoms";
import { product } from "@/generated/prisma";
import { Cart, CartItem } from "@/types/types";
import { useAtom, useAtomValue, useSetAtom } from "jotai";
import { useEffect } from "react";


export const useCartInit = (): void => {
    const [cart, setCart] = useAtom(cartAtom);
    // initialize with cart from localStorage
    useEffect(() => {
        const persistedCart = localStorage.getItem('cart');
        if (persistedCart && cart.length === 0) {
            setCart(JSON.parse(persistedCart));
        }
    }, []);
}

export const useCartRead = (): {
    cart: Cart,
    count: number,
    total: number,
} => {
    const cart = useAtomValue(cartAtom);

    const count = cart.reduce((acc, item) => acc + item.quantity, 0);
    const total = cart.reduce((acc, item) => acc + item.product.price * item.quantity, 0);

    return {
        cart,
        count,
        total,
    }
}

export const useCartWrite = (): {
    addToCart: (product: product, quantity: number) => void,
    changeQuantity: (product: product, newQuantity: number) => void,
    removeFromCart: (product: product) => void,
} => {
    const setCart = useSetAtom(cartAtom);

    // This is a setCart wrapper : do setCart and persist in localStorage
    const handleSetCart = (setStateFn: (cart: Cart) => Cart) => {
        setCart((prevCart: Cart) => {
            const newCart = setStateFn(prevCart);
            localStorage.setItem('cart', JSON.stringify(newCart));
            return newCart;
        });
    };

    const handleAddToCart = (
        product: product,
        quantity: number,
    ) => {
        handleSetCart((prevCart: Cart) => {
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
        handleSetCart((prevCart: Cart) => {
            return prevCart.map((cartItem: CartItem) => {
                if (cartItem.product.id === product.id) {
                    return {
                        ...cartItem,
                        quantity: newQuantity,
                    }
                }
                return cartItem;
            });
        });
    };

    const handleRemoveFromCart = (
        product: product,
    ) => {
        handleSetCart((prevCart: Cart) => {
            return prevCart.filter((cartItem: CartItem) => cartItem.product.id !== product.id);
        });
    };
    
    return {
        addToCart: handleAddToCart,
        changeQuantity: handleChangeQuantity,
        removeFromCart: handleRemoveFromCart,
    }
}
