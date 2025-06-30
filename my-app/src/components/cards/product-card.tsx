'use client'

import { product } from "@/generated/prisma"
import { Button } from "../ui/button";
import { useCart } from "@/functions/useCart";
import { ShoppingCartIcon } from "lucide-react";
import { formatPrice } from "@/functions/priceFormater";

type Props = {
    product: product,
};

export const ProductCard = ({
    product,
}: Props) => {
    const { addToCart } = useCart();

    return (
        <div className="border border-gray-300 rounded-md p-4 w-[250px] text-center">
            <h2 className="uppercase font-bold">{product.designation}</h2>
            <p className="my-4 text-lg">{formatPrice(product.price)}</p>
            <Button className="w-full mt-4" onClick={() => addToCart(product, 1)}>
                <ShoppingCartIcon className="w-4 h-4" />{' '}
                Add to cart
            </Button>
        </div>
    )
}
