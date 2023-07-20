import React from 'react'

export default function Header() {
  return (
    <div className='flex justify-between px-10 py-2 border-b border-grey-200 items-center'>
        <div>
        <img src="/image/logo/logo_harisenin.svg" className="w-24"/>
        </div>
        <div>
           <ul className='flex gap-4 text-sm'>
                <li>Home</li>
                <li>About</li>
                <li>Service</li>
           </ul>
        </div>
    </div>
  )
}
