import Wrapper from '@/components/Wrapper'
import React from 'react'
import { IoMdHeartEmpty } from 'react-icons/io'
import ProductDetailsCarousel from '@/components/ProductDetailsCarousel'


const ProductDetails = () => {

    return(
        <div className="w-full md:py-20">
            <Wrapper>
                <div className="flex flex-col lg:flex-row md:px-0 gap-[50px] lg:gap-[100px]">
                    {/* Left col start */}
                    <div className="w-full md:w-auto flex-[1.5] max-w-[500px] lg:max-w-full mx-auto lg:max-0">
                        <ProductDetailsCarousel />
                    </div>

                    {/* Right col start */}
                    <div className="flex-[1] py-3">
                        {/*Product Title*/}
                        <div className="text-[34px] font-semibold mb-2">
                            Jordan Retro 6 G
                        </div>
                         {/*Product sub-Title*/}
                         <div className="text-lg font-semibold mb-5">
                            Men&apos;s Golf Shoes 
                         </div>
                         {/*Product Price*/}
                         <div className="text-lg font-semibold">
                            MRP : $19.65
                         </div>
                         <div className="text-md font-medium text-black/[0.5]">
                            incl. of taxes
                         </div>
                         <div className="text-md font-medium text-black/[0.5] mb-20">
                            {`(Also Includes all applicable duties)`}
                         </div>

                        
                        <div className="mb-10"> 
                            <div className="flex justify-between mb-2">
                                <div className="text-md font-semibold">
                                    Select Size
                                </div>
                                <div className="text-md font-medium text-black/[0.5]
                                cursor-pointer">
                                    Select Guide
                                </div>
                            </div>
                        </div>
                        {/*Product Size selection*/}
                        <div className="grid grid-cols-3 gap-2">
                            <div className="border rounded-md text-center py-3
                            font-medium hover:border-black cursor-pointer">
                            UK 6
                            </div>
                            <div className="border rounded-md text-center py-3
                            font-medium hover:border-black cursor-pointer">
                            UK 6
                            </div>
                            <div className="border rounded-md text-center py-3
                            font-medium hover:border-black cursor-pointer">
                            UK 6
                            </div>
                            <div className="border rounded-md text-center py-3
                            font-medium hover:border-black cursor-pointer">
                            UK 6
                            </div>
                            <div className="border rounded-md text-center py-3
                            font-medium hover:border-black cursor-pointer">
                            UK 6
                            </div>
                            <div className="border rounded-md text-center py-3
                            font-medium hover:border-black cursor-pointer">
                            UK 6
                            </div>
                            <div className="border rounded-md text-center py-3
                            font-medium hover:border-black cursor-pointer">
                            UK 6
                            </div>
                            <div className="border rounded-md text-center py-3
                            font-medium hover:border-black cursor-pointer">
                            UK 6
                            </div>
                            <div className="border rounded-md text-center py-3
                            font-medium cursor-not-allowed bg-black/[0.1] opacity-50">
                            UK 6
                            </div>

                        </div>
                        <div className="text-red-600 mt-1">
                            Size selection is required
                        </div>
                        <div>
                            <button className="w-full py-4 rounded-full bg-black text-white text-lg font-medium
                            transition-transform active:scale-95 mb-3 hover:opacity-75">
                                Add to cart
                            </button>

                            <button className="w-full py-4 rounded-full border border-black text-lg font-medium transition-transform active:scale-96 flex items-center
                            justify-center gap-2 hover:opacity-75 mb-10">
                                Whishlist
                                <IoMdHeartEmpty/>
                            </button>
                            <div className="text-lg font-bold mb-5">
                                    Product Details
                            </div>
                            <div className="text-md mb-5">
                            The Nike Air Zoom Pegasus 38 continues to put a spring in your step, using the same responsive foam as its predecessor.
                            Breathable mesh in the upper combines the comfort and durability you want with a wider fit at the toes. 
                            Whether you're hitting the pavement or the treadmill, these shoes provide the support and cushioning you need for your daily runs. 
                            With its updated design and enhanced features, the Nike Air Zoom Pegasus 38 is the perfect choice for runners of all levels.
                            </div>
                        </div>
                        

                        

                    </div>
                </div>
                
            </Wrapper>
        </div>
    )
}

export default ProductDetails
