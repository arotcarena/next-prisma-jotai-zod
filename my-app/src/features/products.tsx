import { ProductCard } from "@/components/cards/product-card"
import { product } from "@/generated/prisma"
import { prisma } from "@/lib/prisma"

export const Products = async () => {

    const products = await prisma.product.findMany()

    return (
        <div className="flex gap-4 m-5 flex-wrap justify-center">
            {
                products.map((product: product, index: number) => (
                    <ProductCard key={index} product={product} />
                ))
            }
        </div>
    )
}
