import React, { useEffect, useState } from 'react'
import Header from '../Comopnen/Header'
import Card from '../Comopnen/card'
import axios from 'axios'
import {BsSearch} from 'react-icons/bs'

export default function Home() {

    const [dataProduct, setDataProduct ]= useState ([])
    const [search, setSearch ]= useState ([])

    const getData =(searchProduct) =>{
        axios.get(`https://643a4e09bd3623f1b9b09e50.mockapi.io/products`, {
            params :{
                search: searchProduct
            }
        }).then((res) =>{
            const{ data } = res
            setDataProduct(data)
        })
    }

        useEffect (() => {
            getData()
        }, [])

        const onchangeSearch = (e) =>{
            setSearch(e.target.value)
            console.log(e.target.value)
        }

        useEffect(() => {
            getData(search)
        }, [search])

        useEffect(()=> {
            const debounceSearch = setTimeout (()=> {
                if(search) {
                    getData(search)
                }
            }, 2000)
            return () =>clearTimeout(debounceSearch)
        }, [search])

  return (
        <div>
            <Header/>

            <div className='flex justify-center mt-10'>
                <div className='flex border-2 border-grey bg-grey-50 pl-2 rounded-xl w-80'>
                    <div className='flex items-center'><BsSearch className='text-2xl'/></div>
                    <input type="search" id="default-search" className='w-full p-4 pl-10 text-sm text-grey-900 focus:border-0 rounded-lg bg-grey-50' placeholder='Search' value={search} onChange={onchangeSearch}/>
                </div>
            </div>

            <div className='px-10 mt-5 grid grid-cols-5 gap-2'>
                {dataProduct.map((item) => (

            <Card data={item}/>
                ))}

            </div>
        </div>
  )
}
 