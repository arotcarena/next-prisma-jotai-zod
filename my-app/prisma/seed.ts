import { prisma } from "../src/lib/prisma"

const productsData = [
    {
        designation: 'iPhone 15',
        slug: 'iphone-15',
        price: 100000,
    },
    {
        designation: 'iPhone 14',
        slug: 'iphone-14',
        price: 90000,
    },
    {
        designation: 'Samsung Galaxy S24',
        slug: 'samsung-galaxy-s24',
        price: 95000,
    },
    {
        designation: 'Google Pixel 8',
        slug: 'google-pixel-8',
        price: 85000,
    },
    {
        designation: 'OnePlus 12',
        slug: 'oneplus-12',
        price: 75000,
    },
    {
        designation: 'Xiaomi 14',
        slug: 'xiaomi-14',
        price: 70000,
    },
    {
        designation: 'Nothing Phone 2',
        slug: 'nothing-phone-2',
        price: 65000,
    },
    {
        designation: 'ASUS ROG Phone 8',
        slug: 'asus-rog-phone-8',
        price: 120000,
    }
]

async function main() {

    for (const productData of productsData) {
        await prisma.product.create({
            data: productData
        })
    }
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })
