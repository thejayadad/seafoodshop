'use client'
import React, { useState } from 'react';
import { signIn, signOut, useSession } from 'next-auth/react';
import { motion } from 'framer-motion';
import { FiUser, FiShoppingCart } from 'react-icons/fi';
import Link from 'next/link';

const AuthLinks = () => {
  const { data: session } = useSession();
  const [linksVisible, setLinksVisible] = useState(false);

  const handleProfileClick = () => {
    setLinksVisible(!linksVisible);
  };

  return (
    <div className="flex items-center space-x-4">
      <motion.div
        whileHover={{ scale: 1.5 }}
        className="relative"
        onClick={handleProfileClick}
      >
        <FiUser size={24} className='cursor-pointer' color="#000" />
        {linksVisible && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.3 }}
            className="absolute top-8 left-0 bg-white p-2 rounded-md shadow-md"
          >
            {session ? (
              // If user is logged in
              <>
                <button onClick={() => signOut()}>Log Out</button>
                <button>Wishlist</button>
              </>
            ) : (
              // If user is not logged in
              <>
                <Link href="/register">
                  <span>Register</span>
                </Link>
                <Link href="/login">
                  <span>Login</span>
                </Link>
              </>
            )}
          </motion.div>
        )}
      </motion.div>

      <motion.div whileHover={{ scale: 1.5 }}>
        <FiShoppingCart className='cursor-pointer' size={24} color="#000" />
      </motion.div>
    </div>
  );
};

export default AuthLinks;
