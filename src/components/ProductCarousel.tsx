'use client';

import { useAppDispatch } from "@/app/store/hooks";
import { increment } from "@/app/store/slices/counterSlice";

const products = [
  { name: "Galaxy S22 Ultra", price: 92999, offerPrice: 79999 },
  { name: "Galaxy M13", price: 14999, offerPrice: 8999 },
  { name: "Galaxy S22 Ultra", price: 92999, offerPrice: 79999 },
  { name: "Galaxy M13", price: 14999, offerPrice: 8999 },
  { name: "Galaxy S22 Ultra", price: 92999, offerPrice: 79999 },
];

export default function ProductCarousel() {
  const dispatch = useAppDispatch();

  return (
    <section className="my-6 mx-4 pt-5">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-xl font-semibold">Grab the best deal on Smartphones</h3>
        <a href="#" className="text-blue-600 hover:text-blue-800 font-medium">
            View All
            <span className="ml-1 text-base">›</span>

          </a>
      </div>
      <hr className="border-t border-blue-900 w-[250px] mb-4" />
      
      <div className="flex flex-wrap gap-4 justify-start">
        {products.map((product, idx) => (
          <div
            key={idx}
            className="relative cursor-pointer min-w-[300px] min-h-[340px] bg-white p-4 rounded-lg shadow-md transition-all duration-300 ease-in-out group hover:scale-[1.02] hover:shadow-lg overflow-hidden"
          >
            {/* Top Border */}
            <span className="absolute top-0 left-0 w-full h-[2px] bg-sky-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
            {/* Bottom Border */}
            <span className="absolute bottom-0 left-0 w-full h-[2px] bg-sky-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-right" />
            {/* Left Border */}
            <span className="absolute top-0 left-0 w-[2px] h-full bg-sky-400 transform scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-top" />
            {/* Right Border */}
            <span className="absolute top-0 right-0 w-[2px] h-full bg-sky-400 transform scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-bottom" />

            <div className="h-32 bg-gray-200 mb-3 rounded-md" />
            <p className="font-semibold text-lg">{product.name}</p>
            <p className="text-gray-600 line-through">₹{product.price.toLocaleString()}</p>
            <p className="text-green-600 font-bold">₹{product.offerPrice.toLocaleString()}</p>
            <p className="text-sm text-red-500">
              Save ₹{(product.price - product.offerPrice).toLocaleString()}
            </p>
            <div className="flex gap-2 mt-auto">
              <button className="cursor-pointer flex items-center justify-center gap-2 bg-orange-400 hover:bg-orange-500 text-white text-sm font-semibold px-4 py-2 rounded w-1/2"
              onClick={() => dispatch(increment())}
              
              >
                <svg className="w-3 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2 9h14l-2-9M9 21a1 1 0 100-2 1 1 0 000 2zm8 0a1 1 0 100-2 1 1 0 000 2z"
                  
                   />
                </svg>
                Add to Cart
              </button>
              <button className="flex items-center justify-center gap-2 bg-orange-500 hover:bg-orange-600 text-white text-sm font-semibold px-4 py-2 rounded w-1/2">
                <svg className="w-3 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                Buy Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}