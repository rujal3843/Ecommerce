import React from 'react';
import { useGetSingleQuery } from '../app/Project_Api';
import { useParams } from 'react-router-dom';

export const Single = () => {
  const { id } = useParams();

  const { data } = useGetSingleQuery(id);

  return (
    <div className='bg-[#5C3C24] text-white'>
      {data && (
        <div key={data.id} className='grid grid-cols-1 sm:grid-cols-2 '>
        <img src={data.images} alt='' className='h-[540px] ml-10 mt-5 shadow-lg hover:scale-105 ease-in duration-300 cursor-pointer' />


          <div>
            <h1 className='font-bold text-[30px]'>{data.title}</h1>
            <p className='text-[20px]'>Details: {data.description}</p>
            <p className='mt-5'>CreateAt: {data.creationAt}</p>
            <p className='mt-5'>UpdateAt: {data.updatedAt}</p>
            <p className='mt-5'>Price:{data.price}</p>
          </div>

        </div>
      )}
    </div>
  );
};
