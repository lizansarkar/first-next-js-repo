"use client"
import { useRouter } from 'next/navigation'
import React from 'react'

export default function Banner() {
    const router = useRouter();

    const handleBtn = () => {
        const oldPassword = "1234"
        const password = prompt("enter your password")

        if(oldPassword === password) {
            console.log(router)
            router.push("/dashboard")
        }
    }
  return (
    <div className='text-center space-y-5 bg-linear-60 to-gray-100 from-gray-300 text-black p-10'>
        <h1 className='text-4xl font-bold'>welcome to dev story</h1>
        <button onClick={handleBtn} className='px-4 py-2 bg-sky-500 text-white cursor-pointer hover:bg-black duration-1000 rounded-sm'>Share Story</button>
    </div>
  )
}
