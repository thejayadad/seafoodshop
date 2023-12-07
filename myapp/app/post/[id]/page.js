'use client'
import React from 'react'
import Image from 'next/image'

const SinglePost = () => {
  return (
    <section>
      <div className="container">
  <div className="flex">
    <div className="flex-1 flex flex-col justify-between">
      <h1 className="text-4xl">title</h1>
      <p className="text-lg font-light">
        desc
      </p>
      <div className="flex items-center space-x-2">
        <img
          src='https://images.pexels.com/photos/18772267/pexels-photo-18772267/free-photo-of-a-black-and-white-photo-of-a-woman-in-a-tank-top.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
          alt="pic"
          width={40}
          height={40}
          className="rounded-full"
        />
        <span className="text-sm">username</span>
      </div>
    </div>
    <div className="flex-1">
      <img
        src='https://images.pexels.com/photos/18772267/pexels-photo-18772267/free-photo-of-a-black-and-white-photo-of-a-woman-in-a-tank-top.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
        alt=""
        layout="fill"
        objectFit="cover"
        className="rounded-lg"
      />
    </div>
  </div>
  <div className="mt-8 text-lg font-light">
    <p className="text-justify">
      content
    </p>
  </div>
</div>

    </section>
  )
}

export default SinglePost