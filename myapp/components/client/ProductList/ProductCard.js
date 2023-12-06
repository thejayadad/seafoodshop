'use client'
import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

const ProductCard = ({ product }) => {
  return (
    <Link 
    className='bg-orange-300'
    href={`/product/${product._id}`}>
      <motion
        whileHover={{ scale: 1.05 }}
        className="max-w-xs mx-auto overflow-hidden bg-white rounded shadow-lg"
      >
        <img src={product.image} alt={product.name} className="w-full h-40 object-cover" />
        <div className="p-4">
          <h2 className="text-xl font-semibold mb-2">{product.name}</h2>
          <p className="text-gray-700">{product.description}</p>
          <div className="mt-3 flex items-center justify-between">
            <span className="text-lg font-bold text-gray-800">${product.price}</span>
            <span className="text-sm text-gray-500">{product.category}</span>
          </div>
        </div>
      </motion>
    </Link>
  );
};

export default ProductCard;
