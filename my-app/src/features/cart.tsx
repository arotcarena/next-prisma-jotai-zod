'use client'

import { CartLine } from "@/components/cards/cart-line";
import { useCart } from "@/functions/useCart";
import { CartItem } from "@/types/types";

export const Cart = () => {
    const { cart } = useCart();

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
