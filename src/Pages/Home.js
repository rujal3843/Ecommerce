import React from 'react';
import { useGetDetailQuery } from '../app/Project_Api';
import { useNavigate } from 'react-router-dom';

export const Home = () => {
  const { data,isLoading } = useGetDetailQuery();

  const nav = useNavigate()

  if (isLoading) return <div>Loading.............</div>

  // console.log(data)

  return (
    <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 p-5 bg-gray-600'>
      {data &&
        data?.map((detail) => {
          return (
            <div onClick={()=> nav(`single/${detail.id}`)} key={detail.id} className='shadow-lg hover:scale-105 ease-in duration-300 cursor-pointer' >
            
              <img src={detail.images} alt='' className='' />
              <h1 className='font-bold text-center'>{detail.title}</h1>
              {/* <p>{detail.description}</p> */}

             
            </div>
          );
        })}
    </div>
  );
};
