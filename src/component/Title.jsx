import React from 'react'

export default function Title({children}) {
  return (
    <div className='bg-linear-60 from-green-50 to-green-200 p-3 text-black'>
        <h2 className='text-5xl font-bold'>{children}</h2>
    </div>
  )
}
