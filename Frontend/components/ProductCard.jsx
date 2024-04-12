import React from 'react'
import Link from "next/link";


function ProductCard() {
  return (
    <Link href="/product/1"
    className="transform overflow-hiddne bg-white duration-200 hover:scale-105 cursor-pointer">
        <img className="w-full" src="/product-1.webp" alt="Product Image"/>
        <div className="p-5 text-black/[0.9]">
            <h2 className="text-lg font-medium">Shoe 1</h2>
            <div className="flex items-center text-black/[0.5]">
                <p className="mr-2 text-lg font-semibold">$25.00</p>
                <p className="text-base font-medium line-through">$30.00</p>
                <p className="ml-auto text-base font-medium text-red-500 ">$10% off</p>
            </div>

        </div>
    </Link>
  )
}

export default ProductCard