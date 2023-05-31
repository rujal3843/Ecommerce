import React from 'react'
import { useParams } from 'react-router-dom'
import { useGetCategoryQuery } from '../app/Project_Api';

export const Category = () => {
  const { Category } = useParams();
  const { data, isLoading } = useGetCategoryQuery(Category);

  if (isLoading) return <div>Loading.............</div>

  return (
    <>
<div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 p-5'>
      {data &&
        data?.map((detail) => {
          return (
            <div  className='shadow-2xl hover:scale-105 ease-in duration-300 cursor-pointer' >

              <img src={detail.images} alt='' className='h-[200px]' />
              <h1 className=' text-center'>{detail.title}</h1>
              <p className='font-bold'>Rs. {detail.price}</p>

            </div>
          );
        })}
    </div>

    </>
  )
}
