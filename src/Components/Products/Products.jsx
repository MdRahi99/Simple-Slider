import axios from "axios";
import { useEffect, useState } from "react";

const Products = () => {
    const [products, setProducts] = useState([]);

    const url = './products.json';

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await axios.get(url);
                setProducts(response.data);
            } catch (error) {
                console.log(error);
            }
        };

        fetchProducts();
    }, []);

    return {
        products
    };
};

export default Products;
