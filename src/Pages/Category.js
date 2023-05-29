import React from 'react'
import { useParams } from 'react-router-dom'
import { useGetCategoryQuery } from '../app/Project_Api';

export const Category = () => {
  const { Category } = useParams();
  const { data } = useGetCategoryQuery(Category);

  return (
    <>
      {data && (
        <div key={data.id}>
          <h1>{data.name}</h1>
          <img src={data.images} alt='' className='h-[540px] ml-10 mt-5 shadow-lg hover:scale-105 ease-in duration-300 cursor-pointer' />
          <p className='mt-5'>CreateAt: {data.creationAt}</p>
          <p className='mt-5'>UpdateAt: {data.updatedAt}</p>
        </div>
      )}



    </>
  )
}
