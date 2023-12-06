'use client'
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { fetchProductById } from '@/lib/request';

const SingleProduct = (ctx) => {
  const router = useRouter();
  const [product, setProduct] = useState("");

  useEffect(() => {
    async function fetchProdcut() {
        const res = await fetch(`http://localhost:3000/api/product/${ctx.params.id}`, { cache: 'no-store' })
        const product = await res.json()

        setProduct(product)
      
    }
   fetchProdcut()
}, [])

  if (!product) {
    return <div>Loading...</div>; 
  }

  return (
    <section className='px-4 py-8'>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.5 }}
        >
          <img
            src={product?.image}
            alt={product?.name}
            className='w-full h-auto object-cover rounded-lg shadow-md'
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 20 }}
          transition={{ duration: 0.5 }}
        >
          <div>
            <h2 className='text-3xl font-semibold mb-2'>{product.name}</h2>
            <p className='text-gray-700 mb-4'>{product.description}</p>
            <div className='flex items-center'>
              <span className='text-lg font-bold text-gray-800 mr-4'>
                ${product.price}
              </span>
              <span className='text-sm text-gray-500'>{product.category}</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SingleProduct;
