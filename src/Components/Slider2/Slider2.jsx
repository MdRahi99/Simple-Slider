import { useState } from 'react';
import MiniProductCard from '../Products/MiniProductCard';
import Products from '../Products/Products';
import { BsDot } from '@react-icons/all-files/bs/BsDot';

const Slider2 = () => {
  const { products } = Products();
  const [currentIndex, setCurrentIndex] = useState(0);

  const bestSellerProducts = products.filter(product => product.category === "Best Seller");

  const numDots = Math.ceil(bestSellerProducts.length / 3);

  return (
    <>
      <div className="w-full h-screen lg:w-5/6 mx-auto mt-8 lg:mt-14 flex flex-col lg:flex-row gap-6 justify-between">
        <div className="w-full lg:w-2/3">
          <img className="w-full h-96" src="http://surl.li/oqzzu" alt="" />
        </div>
        <div className="w-full lg:w-1/3">
          <div className="flex items-center justify-between border-b-4 border-orange-600 lg:mx-0 mx-3">
            <h1 className="text-2xl font-bold uppercase">Best Sellers</h1>
            <div className="flex items-center justify-end">
              {Array.from({ length: numDots }, (_, dotIndex) => (
                <BsDot
                  key={dotIndex}
                  className={`text-6xl text-slate-500 cursor-pointer ${dotIndex * 3 === currentIndex ? 'text-orange-600' : ''}`}
                  onClick={() => setCurrentIndex(dotIndex * 3)}
                />
              ))}
            </div>
          </div>
          {bestSellerProducts.slice(currentIndex, currentIndex + 3).map((product, index) => (
            <div key={index}>
              <MiniProductCard product={product} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Slider2;
