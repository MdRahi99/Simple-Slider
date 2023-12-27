import { FaStar } from '@react-icons/all-files/fa/FaStar';
import { FaHeart } from '@react-icons/all-files/fa/FaHeart';
import { FaSearch } from '@react-icons/all-files/fa/FaSearch';
import { FaSync } from '@react-icons/all-files/fa/FaSync';
import { useState } from 'react';

/* eslint-disable react/prop-types */
const ProductCard = ({ product }) => {
    const { discount_percent, discount_price, image, name, price, rating, description } = product;

    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    return (
        <div
            className="relative flex flex-col lg:flex-row gap-4 items-center justify-between"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <div className="relative w-full lg:w-1/2">
                <h1 className='absolute top-4 left-4 h-11 w-11 rounded-full bg-orange-600 text-white p-1 pt-2 text-center'>-{discount_percent}%</h1>
                <img
                    className={`h-96 lg:h-64 w-full ${isHovered ? 'opacity-50' : 'opacity-100'}`}
                    src={image ? image : 'Not Found'}
                    alt=""
                />

                {isHovered && (
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex items-center gap-8">
                        <FaHeart className="text-black bg-white p-3 h-10 w-10 hover:bg-orange-600 hover:text-white rounded-full text-2xl shadow-2xl" />
                        <FaSearch className="text-black bg-white p-3 h-10 w-10 hover:bg-orange-600 hover:text-white rounded-full text-2xl shadow-2xl" />
                        <FaSync className="text-black bg-white p-3 h-10 w-10 hover:bg-orange-600 hover:text-white rounded-full text-2xl shadow-2xl" />
                    </div>
                )}
            </div>
            <div className="flex p-2 flex-col gap-3 w-full lg:w-1/2 h-72">
                <div className='flex items-center gap-2'>
                    <FaStar className='text-orange-600' />
                    <h1 className='text-lg font-bold'>{rating}</h1>
                </div>
                <h3 className="text-lg font-bold">{name}</h3>
                <div className="flex items-center gap-4">
                    <h3 className="text-2xl font-bold text-orange-600">${discount_price}</h3>
                    <h3 className="text-lg font-bold text-gray-400 line-through">${price}</h3>
                </div>
                <p className="text-gray-400 font-medium">{description}</p>
                
                {isHovered && (
                    <button className="bg-blue-500 hover:bg-orange-600 text-white px-4 py-2 mt-2 rounded-3xl font-bold">Add to Cart</button>
                )}
            </div>
        </div>
    );
};

export default ProductCard;
