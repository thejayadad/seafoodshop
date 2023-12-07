'use client'
import React from 'react'
import MenuLinks from './MenuLinks'
import AuthLinks from './AuthLinks'
import Logo from '@/components/Logo/Logo'

const Navbar = () => {
  return (
    <header className='py-12'>
        <nav className='flex justify-between items-center h-[100px]'>
            <MenuLinks />
            <Logo size='150px' />
            <AuthLinks />
        </nav>
    </header>
  )
}

export default Navbar