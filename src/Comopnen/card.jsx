import React from 'react'
// import PropsType from 'props-type'


export default function Card({data}) {
  return (
    <div className='max-w-s bg-white border border-grey-200 rounded-lg shadow cursor-pointer mt-5'>
        <div className='h-30'>
            <img className='h-30 w-full' src={data.images}/>
        </div>
        <div className='p-4'>
            <div className='text-xl'>
                {data.productName}
            </div>
            <div className='font-semibold mt-2'>
               Rp. {data.price}
            </div>
        </div>
    </div>
  )
}

// Card.PropsType = {
//     data: PropsType.shape({
//         productName : PropsType.string.isRequired,
//         price : PropsType.integer.isRequired,
//         images : PropsType.string.isRequired,
//     })
// }