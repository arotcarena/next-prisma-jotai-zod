'use client'

import { cartAtom } from "@/atoms";
import { CartLine } from "@/components/cards/cart-line";
import { useCartInit, useCartRead } from "@/functions/useCart";
import { CartItem } from "@/types/types";

export const Cart = () => {
    useCartInit();
    const {cart} = useCartRead();

    return (
        <div className="flex flex-col gap-y-4">
            {
                cart.map((cartItem: CartItem) => (
                    <CartLine key={cartItem.product.id} cartItem={cartItem} />
                ))
            }
        </div>
    )
}
