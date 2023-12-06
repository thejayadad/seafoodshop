'use client'
import React, { useState, useEffect } from 'react';
import ProductCard from './ProductCard';
import { fetchProducts } from '@/lib/request';


const ProductList = () => {
    const [products, setProducts] = useState([]);
      const [loading, setLoading] = useState(true);


    useEffect(() => {
      const fetchData = async () => {
        try {
          const data = await fetchProducts();
          setProducts(data);
        } catch (error) {
          console.error('Error fetching products:', error);
        }
      };
  
      fetchData();
    }, []);

  return (
    <section className="container mx-auto my-8 grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </section>
  );
};

export default ProductList;
