import Link from 'next/link'
import React from 'react'

export default function DashboardLayout({children}) {
  return (
    <div className='grid grid-cols-12 gap-5 min-h-screen'>
        <div className='col-span-3 border-r-2'>
            <Link href='/' className="text-lg font-semibold">dev story</Link>
            <div className='flex flex-col gap-5 mt-7'>
                <Link className='py-2 px-4 w-full bg-green-600 text-white rounded-md' href={"/dashboard/add-story"}>add story</Link>
                <Link className='py-2 px-4 w-full bg-green-600 text-white rounded-md' href={"/dashboard/my-profile"}>my profile</Link>
                <Link className='py-2 px-4 w-full bg-green-600 text-white rounded-md' href={"/dashboard/settings"}>settings</Link>
            </div>
        </div>
        <div className='col-span-9'>{children}</div>
    </div>
  )
}
