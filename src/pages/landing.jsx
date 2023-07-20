import React from 'react'
import { Carousel } from 'flowbite-react'

const Landing =() =>{
  return (
    <>
    <section id='page-content'>
    <div  className='flex w-full  h-screen bg-yellow-400'>
            <div className='w-1/2'>
            <div className='mt-56 ml-32 font-medium'>
             <p className='text-4xl text-blue-700'>Bergabung dengan GAS</p>
              <p className='text-2xl mt-5'>Aplikasi untuk memudahkan pelaku usaha menjangkau calon pembeli lebih luas. Daftarkan tokomu dan nikmati keuntungan bersama GAS!</p>
              {/* <a href="#" className=''>Bergabung</a> */}
              <button type="link"className='bg-blue-800 hover:bg-blue-600 px-2 py-2 rounded text-white mt-3'>Unduh Sekarang</button>
            </div>
            </div>
            <div className='w-1/2 ml-11 mt-44'> 
            <img src="https://gas.id/files/images/ilustration_top_1616732601.png" width={420} alt="Logo" />
            </div>
       
    </div>
    </section>

   
 <section id='more-content' className='bg-blue-800 inset-fullS'>
    <div  className='flex w-full  h-screen' >
            <div className='w-1/2 text-white font-medium'>
              <p className='text-2xl ml-28 mt-52'>
              GAS adalah aplikasi untuk memudahkan pelaku usaha menjangkau calon pembeli lebih luas. Melalui gerakan #AyoBelanjaTokoTetangga GAS mengajak untuk menjelajah dan mendukung usaha-usaha di sekitarmu.
              </p>
            </div>
            <div className='w-1/2'>
            <Carousel className='absolute w-1/2 mx-44 font-medium my-5 rounded'>
              <div  className='items-center bg-yellow-300 bg-repeat-y bg-center ' >
                <p className='text-3xl text-blue-600'>Pembeli</p>
                <img
                  alt="..."
                  src="https://gas.id/files/images/gambar-pembeli_1616661475.png"
                />
                <ul className='mt-4 mb-20 bg-yellow-300 text-1xl'>
                  <li>Tanpa Biaya daftar</li>
                  <li>Tanpa Biaya daftar</li>
                  <li>Tanpa Biaya daftar</li>
                </ul>
              </div>
              <div  className='items-center bg-yellow-300' >
                <p className='text-3xl text-blue-600'>Pembeli</p>
                <img
                  alt="..."
                  src="https://gas.id/files/images/gambar-pembeli_1616661475.png"
                />
                <ul className='mt-4 mb-20 bg-yellow-300 text-1xl'>
                  <li>Tanpa Biaya daftar</li>
                  <li>Tanpa Biaya daftar</li>
                  <li>Tanpa Biaya daftar</li>
                </ul>
              </div>
              <div  className='items-center bg-yellow-300' >
                <p className='text-3xl text-blue-600'>Pembeli</p>
                <img
                  alt="..."
                  src="https://gas.id/files/images/gambar-pembeli_1616661475.png"
                />
                <ul className='mt-4 mb-20 bg-yellow-300 text-1xl'>
                  <li>Tanpa Biaya daftar</li>
                  <li>Tanpa Biaya daftar</li>
                  <li>Tanpa Biaya daftar</li>
                </ul>
              </div>
              </Carousel>
            </div>
           </div>
    </section>
    
    {/* <section id='more-content' className='bg-green-300'>
    <div  className='flex w-full  h-screen' >
            <div className='w-1/2 text-white font-medium'>
              <p className='text-2xl ml-28 mt-52'>
              GAS adalah aplikasi untuk memudahkan pelaku usaha menjangkau calon pembeli lebih luas. Melalui gerakan #AyoBelanjaTokoTetangga GAS mengajak untuk menjelajah dan mendukung usaha-usaha di sekitarmu.
              </p>
            </div>
            <div className='w-1/2'>
            <Carousel className='w-1/2 mx-44 font-medium my-5 rounded'>
              <div  className='items-center bg-yellow-300' >
                <p className='text-3xl text-blue-600'>Pembeli</p>
                <img
                  alt="..."
                  src="https://gas.id/files/images/gambar-pembeli_1616661475.png"
                />
                <ul className='mt-4 mb-20 bg-yellow-300 text-1xl'>
                  <li>Tanpa Biaya daftar</li>
                  <li>Tanpa Biaya daftar</li>
                  <li>Tanpa Biaya daftar</li>
                </ul>
              </div>
              <div  className='items-center bg-yellow-300' >
                <p className='text-3xl text-blue-600'>Pembeli</p>
                <img
                  alt="..."
                  src="https://gas.id/files/images/gambar-pembeli_1616661475.png"
                />
                <ul className='mt-4 mb-20 bg-yellow-300 text-1xl'>
                  <li>Tanpa Biaya daftar</li>
                  <li>Tanpa Biaya daftar</li>
                  <li>Tanpa Biaya daftar</li>
                </ul>
              </div>
              <div  className='items-center bg-yellow-300' >
                <p className='text-3xl text-blue-600'>Pembeli</p>
                <img
                  alt="..."
                  src="https://gas.id/files/images/gambar-pembeli_1616661475.png"
                />
                <ul className='mt-4 mb-20 bg-yellow-300 text-1xl'>
                  <li>Tanpa Biaya daftar</li>
                  <li>Tanpa Biaya daftar</li>
                  <li>Tanpa Biaya daftar</li>
                </ul>
              </div>
              </Carousel>
            </div>
    </div>
    </section>

    <section id='more-content' className='bg-slate-300'>
    <div  className='flex w-full  h-screen' >
            <div className='w-1/2 text-white font-medium'>
              <p className='text-2xl ml-28 mt-52'>
              GAS adalah aplikasi untuk memudahkan pelaku usaha menjangkau calon pembeli lebih luas. Melalui gerakan #AyoBelanjaTokoTetangga GAS mengajak untuk menjelajah dan mendukung usaha-usaha di sekitarmu.
              </p>
            </div>
            <div className='w-1/2'>
            <Carousel className='w-1/2 mx-44 font-medium my-5 rounded'>
              <div  className='items-center bg-yellow-300' >
                <p className='text-3xl text-blue-600'>Pembeli</p>
                <img
                  alt="..."
                  src="https://gas.id/files/images/gambar-pembeli_1616661475.png"
                />
                <ul className='mt-4 mb-20 bg-yellow-300 text-1xl'>
                  <li>Tanpa Biaya daftar</li>
                  <li>Tanpa Biaya daftar</li>
                  <li>Tanpa Biaya daftar</li>
                </ul>
              </div>
              <div  className='items-center bg-yellow-300' >
                <p className='text-3xl text-blue-600'>Pembeli</p>
                <img
                  alt="..."
                  src="https://gas.id/files/images/gambar-pembeli_1616661475.png"
                />
                <ul className='mt-4 mb-20 bg-yellow-300 text-1xl'>
                  <li>Tanpa Biaya daftar</li>
                  <li>Tanpa Biaya daftar</li>
                  <li>Tanpa Biaya daftar</li>
                </ul>
              </div>
              <div  className='items-center bg-yellow-300' >
                <p className='text-3xl text-blue-600'>Pembeli</p>
                <img
                  alt="..."
                  src="https://gas.id/files/images/gambar-pembeli_1616661475.png"
                />
                <ul className='mt-4 mb-20 bg-yellow-300 text-1xl'>
                  <li>Tanpa Biaya daftar</li>
                  <li>Tanpa Biaya daftar</li>
                  <li>Tanpa Biaya daftar</li>
                </ul>
              </div>
              
              </Carousel>
            </div>
    </div>
    </section>

    <section id='more-content' className='bg-blue-800'>
    <div  className='flex w-full  h-screen' >
            <div className='w-1/2 text-white font-medium'>
              <p className='text-2xl ml-28 mt-52'>
              GAS adalah aplikasi untuk memudahkan pelaku usaha menjangkau calon pembeli lebih luas. Melalui gerakan #AyoBelanjaTokoTetangga GAS mengajak untuk menjelajah dan mendukung usaha-usaha di sekitarmu.
              </p>
            </div>
            <div className='w-1/2'>
            <Carousel className='w-1/2 mx-44 font-medium my-5 rounded'>
              <div  className='items-center bg-yellow-300' >
                <p className='text-3xl text-blue-600'>Pembeli</p>
                <img
                  alt="..."
                  src="https://gas.id/files/images/gambar-pembeli_1616661475.png"
                />
                <ul className='mt-4 mb-20 bg-yellow-300 text-1xl'>
                  <li>Tanpa Biaya daftar</li>
                  <li>Tanpa Biaya daftar</li>
                  <li>Tanpa Biaya daftar</li>
                </ul>
              </div>
              <div  className='items-center bg-yellow-300' >
                <p className='text-3xl text-blue-600'>Pembeli</p>
                <img
                  alt="..."
                  src="https://gas.id/files/images/gambar-pembeli_1616661475.png"
                />
                <ul className='mt-4 mb-20 bg-yellow-300 text-1xl'>
                  <li>Tanpa Biaya daftar</li>
                  <li>Tanpa Biaya daftar</li>
                  <li>Tanpa Biaya daftar</li>
                </ul>
              </div>
              <div  className='items-center bg-yellow-300' >
                <p className='text-3xl text-blue-600'>Pembeli</p>
                <img
                  alt="..."
                  src="https://gas.id/files/images/gambar-pembeli_1616661475.png"
                />
                <ul className='mt-4 mb-20 bg-yellow-300 text-1xl'>
                  <li>Tanpa Biaya daftar</li>
                  <li>Tanpa Biaya daftar</li>
                  <li>Tanpa Biaya daftar</li>
                </ul>
              </div>
              
              </Carousel>
            </div>
    </div>
    </section> */}


    
    </>
  )
}

export default Landing