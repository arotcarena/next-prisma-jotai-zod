'use client'

import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerFooter,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
  } from "@/components/ui/drawer"
import { ShoppingCartIcon, XIcon } from "lucide-react"
import { Button } from "./ui/button"
import Link from "next/link"
import { Cart } from "@/features/cart"
import { Badge } from "./ui/badge"
import { formatPrice } from "@/functions/priceFormater"
import { useCartRead } from "@/functions/useCart"

export const CartDrawer = () => {
    const { count, total } = useCartRead();

    return (
        <Drawer direction="right">
            <DrawerTrigger className="relative">
                {
                    count > 0 && (
                        <Badge className="h-5 min-w-5 rounded-full px-1 font-mono tabular-nums absolute top-0 right-0 translate-x-1/2 -translate-y-1/2">
                            {count}
                        </Badge>
                    )
                }
                <ShoppingCartIcon className="w-6 h-6" />
            </DrawerTrigger>
            <DrawerContent>
                <DrawerHeader className="h-[64px] border-b flex items-center justify-center relative">
                    <DrawerTitle>Cart</DrawerTitle>
                    <DrawerClose className="absolute top-1/2 right-4 -translate-y-1/2">
                        <XIcon className="w-4 h-4" />
                    </DrawerClose>
                </DrawerHeader>
                <Cart />
                <DrawerFooter>
                    <div className="flex items-center justify-between w-full">
                        <p>Total</p>
                        <p>{formatPrice(total)}</p>
                    </div>
                    <Button asChild>
                        <Link href="/checkout">Checkout</Link>
                    </Button>
                </DrawerFooter>
            </DrawerContent>
        </Drawer>
    )
}
