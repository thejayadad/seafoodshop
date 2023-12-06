'use client'
import Link from 'next/link'
import React from 'react'
import { motion } from 'framer-motion';


const Logo = () => {
  return (
    <motion.div
    whileHover={{ scale: 1.4 }}
    className="relative"
  >
    <Link href={'/'}>
      <img

      src='/logo.png'
      className='h-48 w-48'
      />
    </Link>
    </motion.div>
  )
}

export default Logo