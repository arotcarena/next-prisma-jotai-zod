import { product } from "@/generated/prisma"

export type CartItem = {
    product: product,
    quantity: number,
};

export type Cart = CartItem[];
