/* eslint-disable react/prop-types */
import { FaStar } from "@react-icons/all-files/fa/FaStar";

const MiniProductCard = ({ product }) => {

    const { discount_price, image, name, price, rating } = product;

    return (
        <>
            <div className="flex items-center w-full justify-between gap-4 p-3 mt-4">
                <div className="w-2/5 p-3">
                    <img className="w-full h-24" src={image} alt="" />
                </div>
                <div className="w-3/5 flex flex-col gap-2">
                    <div className='flex items-center gap-2'>
                        <FaStar className='text-orange-600' />
                        <h1 className='text-lg font-bold'>{rating}</h1>
                    </div>
                    <h3 className="text-lg font-bold">{name}</h3>
                    <div className="flex items-center gap-4">
                        <h3 className="text-xl font-bold text-orange-600">${discount_price}</h3>
                        <h3 className="text-lg font-bold text-gray-400 line-through">${price}</h3>
                    </div>
                </div>
            </div>
        </>
    );
};

export default MiniProductCard;