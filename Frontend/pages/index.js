import HeroBanner from "@/components/HeroBanner";
import ProductCard from "@/components/ProductCard";
import Wrapper from "@/components/Wrapper";

export default function Home() {
    return <main className="">
        <HeroBanner/>
        <Wrapper>
            {/*Heading and Paragraph start */}
            <div className="text-center max-w-[800px] mx-auto my-[50px] md:my-[80px]">
                <div className="text-[28px] md:text-[34px] mb-5 font-semibold">
                Soothing Your Steps Across the Distance
                </div>
                <div className="text:md md:text-xl">
                Experience unparalleled comfort and performance with Nike's innovative line of footwear, engineered to elevate your every step.
                </div>
            </div>
            {/*Heading and Paragraph end */}

            {/*Product Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-14 px-5 md:px-0">
                <ProductCard/>
                <ProductCard/>
                <ProductCard/>
                <ProductCard/>
                <ProductCard/>
                <ProductCard/>
                <ProductCard/>
                <ProductCard/>
                <ProductCard/>
            </div>
        </Wrapper>
    </main>;
}
