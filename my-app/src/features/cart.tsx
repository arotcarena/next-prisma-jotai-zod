'use client'

import { formatPrice } from "@/functions/priceFormater";
import { useCart } from "@/functions/useCart";
import { CartItem } from "@/types/types";

export const Cart = () => {
    const { cart } = useCart();

    console.log(cart)

    return (
        <div className="flex flex-col gap-y-4">
            {
                cart.map((cartItem: CartItem) => (
                    <div key={cartItem.product.id}>
                        <h2>{cartItem.product.designation}</h2>
                        <p>{formatPrice(cartItem.product.price)}</p>
                    </div>
                ))
            }
        </div>
    )
}
