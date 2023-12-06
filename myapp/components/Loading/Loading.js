'use client'
import React from 'react';
import { motion } from 'framer-motion';

const Loading = () => {
  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-900 bg-opacity-75 z-50">
      <motion.div
        className="border-t-4 border-blue-500 border-solid rounded-full h-12 w-12"
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 1, ease: 'linear' }}
      ></motion.div>
    </div>
  );
};

export default Loading;
