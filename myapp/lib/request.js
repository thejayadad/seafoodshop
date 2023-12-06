'use client'

const API_BASE_URL = 'http://localhost:3000/api'; 

export const fetchProducts = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/product`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching products:', error);
    throw error;
  }
};
export const fetchProductById = async (ctx) => {
  try {
    const response = await fetch(`${API_BASE_URL}/product/${ctx.params.id}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log("Error fetching product with ID ", error);
    throw error;
  }
};