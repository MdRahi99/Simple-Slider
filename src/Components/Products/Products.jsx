import axios from "axios";
import { useEffect, useState } from "react";

const Products = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    const url = './products.json';

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await axios.get(url);
                setProducts(response.data);
            } catch (error) {
                console.error("Error fetching products:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchProducts();
    }, [url]);

    return {
        products,
        loading
    };
};

export default Products;
