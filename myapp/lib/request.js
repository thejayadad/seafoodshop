'use client'

// request.js
const API_BASE_URL = 'http://localhost:3000/api'; 

export const registerUser = async (userData) => {
  const apiUrl = `${API_BASE_URL}/register`;

  try {
    const response = await fetch(apiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData),
    });

    if (!response.ok) {
      throw new Error('Registration failed.');
    }

    const data = await response.json();
    return data; 
  } catch (error) {
    console.error('Error registering user:', error.message);
    throw error;
  }
};
