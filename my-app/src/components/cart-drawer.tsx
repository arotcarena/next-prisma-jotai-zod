import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerDescription,
    DrawerFooter,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
  } from "@/components/ui/drawer"
import { ShoppingCartIcon, XIcon } from "lucide-react"
import { Button } from "./ui/button"
import Link from "next/link"
import { Cart } from "@/features/cart"

export const CartDrawer = () => {
    return (
        <Drawer direction="right">
            <DrawerTrigger>
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
                    <Button asChild>
                        <Link href="/checkout">Checkout</Link>
                    </Button>
                </DrawerFooter>
            </DrawerContent>
        </Drawer>
    )
}
