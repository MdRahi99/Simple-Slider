import Products from "../Products/Products";

const Slider2 = () => {

    const { products } = Products();

    return (
        <>
            <div>
                <h1>Slider 2</h1>
                {products.length}
            </div>
        </>
    );
};

export default Slider2;