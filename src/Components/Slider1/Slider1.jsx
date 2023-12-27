import ProductCard from "../Products/ProductCard";
import Products from "../Products/Products";

const Slider1 = () => {

    const { products } = Products();

    return (
        <>
            <div className="w-full lg:w-5/6 grid grid-cols-1 lg:grid-cols-2 gap-16 p-4 justify-items-center mx-auto mt-12">
                {
                    products.map((product, index) => {
                        return <ProductCard key={index} product={product} />
                    })
                }
            </div>
        </>
    );
};

export default Slider1;