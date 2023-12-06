'use client'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import { AiOutlineClose } from 'react-icons/ai'
import {signIn, signOut, useSession} from 'next-auth/react'
import MenuLinks from './MenuLinks'
import Logo from '@/components/Logo/Logo'
import AuthLinks from './AuthLinks'

const Navbar = () => {
  return (
    <header className='px-4 py-12'>
        <div className='flex justify-between mx-auto max-w-screen-xl'>
            <MenuLinks />
            <Logo />
            <AuthLinks />
        </div>
    </header>
  )
}

export default Navbar