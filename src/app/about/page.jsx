import Title from '@/component/Title'
import Link from 'next/link'
import React from 'react'

export default function page() {
  return (
    <div>
        <Title>this is about pages</Title>
        <nav className='space-x-5'>
            <Link href={"/about/contact"}>Contact</Link>
            <Link href={"/about/teams"}>Teams</Link>
        </nav>
    </div>
  )
}
