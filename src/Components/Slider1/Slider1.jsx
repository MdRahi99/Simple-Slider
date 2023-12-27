import { useState, useEffect } from "react";
import { FaArrowLeft } from "@react-icons/all-files/fa/FaArrowLeft";
import { FaArrowRight } from "@react-icons/all-files/fa/FaArrowRight";
import ProductCard from "../Products/ProductCard";
import Products from "../Products/Products";

const Slider1 = () => {
    const { products } = Products();
    const productsPerPageDesktop = 4;
    const productsPerPageMobile = 1;

    const [startIndex, setStartIndex] = useState(0);
    const [productsPerPage, setProductsPerPage] = useState(productsPerPageDesktop);

    useEffect(() => {
        const handleResize = () => {
            const screenWidth = window.innerWidth;
            if (screenWidth < 640) {
                setProductsPerPage(productsPerPageMobile);
            } else {
                setProductsPerPage(productsPerPageDesktop);
            }
        };

        handleResize();

        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, [productsPerPageDesktop, productsPerPageMobile]);

    const handlePrev = () => {
        setStartIndex((prevIndex) => Math.max(0, prevIndex - productsPerPage));
    };

    const handleNext = () => {
        setStartIndex((prevIndex) =>
            Math.min(prevIndex + productsPerPage, products.length - productsPerPage)
        );
    };

    return (
        <div className="w-full h-screen lg:w-5/6 mx-auto mt-8 lg:mt-14">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-16 p-4 justify-items-center relative overflow-hidden">
                <button
                    onClick={handlePrev}
                    className="absolute left-0 top-1/2 transform -translate-y-1/2 shadow-2xl p-3 rounded-full border-2 border-gray-100"
                >
                    <FaArrowLeft className="text-gray-600 text-2xl" />
                </button>

                {products.slice(startIndex, startIndex + productsPerPage).map((product, index) => (
                    <div
                        key={index + startIndex}
                        className="col-span-1 lg:col-span-2"
                    >
                        <ProductCard product={product} />
                    </div>
                ))}

                <button
                    onClick={handleNext}
                    className="absolute right-0 top-1/2 transform -translate-y-1/2 shadow-2xl p-3 rounded-full border-2 border-gray-100"
                >
                    <FaArrowRight className="text-gray-600 text-2xl" />
                </button>
            </div>
        </div>
    );
};

export default Slider1;
