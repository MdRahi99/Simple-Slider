import { useState } from 'react';
import MiniProductCard from '../Products/MiniProductCard';
import Products from '../Products/Products';
import { BsDot } from '@react-icons/all-files/bs/BsDot';

const Slider2 = () => {
  const { products, loading } = Products();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [mouseDown, setMouseDown] = useState(false);
  const [mouseStart, setMouseStart] = useState(0);
  const [mouseEnd, setMouseEnd] = useState(0);

  const bestSellerProducts = products.filter(product => product.category === 'Best Seller');

  const numDots = Math.ceil(bestSellerProducts.length / 3);

  const handleDotClick = dotIndex => {
    setCurrentIndex(dotIndex * 3);
  };

  const handleSwipe = () => {
    if (mouseEnd - mouseStart > 50) {
      setCurrentIndex(prevIndex => Math.max(0, prevIndex - 3));
    } else if (mouseStart - mouseEnd > 50) {
      setCurrentIndex(prevIndex =>
        Math.min(bestSellerProducts.length - 3, prevIndex + 3)
      );
    }
  };

  const handleMouseDown = e => {
    setMouseDown(true);
    setMouseStart(e.clientX);
  };

  const handleMouseMove = e => {
    if (mouseDown) {
      setMouseEnd(e.clientX);
    }
  };

  const handleMouseUp = () => {
    if (mouseDown) {
      handleSwipe();
      setMouseDown(false);
      setMouseStart(0);
      setMouseEnd(0);
    }
  };

  if (loading) {
    return (
      <div className="h-10 w-10 rounded-full border-8 border-dashed border-black mt-44 animate-spin mx-auto"></div>
    );
  }

  return (
    <>
      <div
        className="w-full h-screen lg:w-5/6 mx-auto flex flex-col mt-8 lg:mt-0 lg:flex-row gap-8 justify-between"
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
      >
        <div className="w-full flex items-center lg:w-2/3">
          <img className="w-full h-96" src="http://surl.li/oqzzu" alt="" />
        </div>
        <div className="w-full flex flex-col justify-center lg:w-1/3">
          <div className="flex items-center justify-between border-b-4 border-orange-600 mx-2 lg:mx-0">
            <h1 className="text-2xl font-bold uppercase">Best Sellers</h1>
            <div className="flex items-center justify-end">
              {Array.from({ length: numDots }, (_, dotIndex) => (
                <BsDot
                  key={dotIndex}
                  className={`text-6xl text-slate-500 cursor-pointer ${
                    dotIndex * 3 === currentIndex
                      ? 'bg-orange-600 h-3 rounded-lg w-10 transition duration-500 delay-300'
                      : ''
                  }`}
                  onClick={() => handleDotClick(dotIndex)}
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
