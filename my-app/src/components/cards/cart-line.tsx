'use client'

import { useCartWrite } from "@/functions/useCart";
import { formatPrice } from "@/functions/priceFormater";
import type { CartItem } from "@/types/types";
import { Button } from "../ui/button";
import { MinusIcon, PlusIcon, Trash2Icon } from "lucide-react";
import { memo } from "react";

type Props = {
    cartItem: CartItem,
};

export const CartLine = memo(({
    cartItem,
}: Props) => {
    const { changeQuantity, removeFromCart } = useCartWrite();

    return (
        <div className="flex items-center justify-between px-4 my-4">
            <div className="grow">
                <h2>{cartItem.product.designation}</h2>
                <p>{formatPrice(cartItem.product.price)}</p>
                <div className="flex items-center gap-x-2">
                    <Button variant="ghost" size="icon" onClick={() => changeQuantity(cartItem.product, cartItem.quantity - 1)}>
                        <MinusIcon className="w-4 h-4" />
                    </Button>
                        <p>{cartItem.quantity}</p>
                    <Button variant="ghost" size="icon" onClick={() => changeQuantity(cartItem.product, cartItem.quantity + 1)}>
                        <PlusIcon className="w-4 h-4" />
                    </Button>
                    <div className="ms-auto">
                        <p>{formatPrice(cartItem.product.price * cartItem.quantity)}</p>
                    </div>
                </div>
            </div>
            <Button variant="ghost" size="icon" onClick={() => removeFromCart(cartItem.product)}>
                <Trash2Icon className="w-4 h-4" />
            </Button>
        </div>
    )
})
