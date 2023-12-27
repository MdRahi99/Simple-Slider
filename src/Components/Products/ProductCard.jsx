import {FaStar} from '@react-icons/all-files/fa/FaStar';

/* eslint-disable react/prop-types */
const ProductCard = ({ product }) => {

    const { discount_percent, discount_price, image, name,
        price, rating, description } = product;

    return (
        <>
            <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
                <div className="relative w-full lg:w-1/2">
                    <h1 className='absolute top-4 left-4 h-11 w-11 rounded-full bg-orange-600 text-white p-1 pt-2 text-center'>-{discount_percent}%</h1>
                    <img className="h-96 lg:h-64 w-full" src={image && image} alt="" />
                </div>
                <div className="flex p-2 flex-col gap-3 w-full lg:w-1/2">
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
                </div>
            </div>
        </>
    );
};

export default ProductCard;