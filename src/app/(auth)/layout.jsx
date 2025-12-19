import React from 'react'

export default function AuthLayout({children}) {
  return (
    <div className='flex min-h-screen gap-5'>
        <div className='flex-2'>
            {children}
        </div>
        <div className='flex-1 bg-sky-600 p-4'>
            <h2 className='text-5xl font-bold'>
                Welcome to authentication
            </h2>
        </div>
    </div>
  )
}
