import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const projectApi = createApi({
  reducerPath: 'projectApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://api.escuelajs.co/api/v1' }),
  endpoints: (builder) => ({

    getDetail: builder.query({
      query: ()=>({
        url: '/products',
      })
    }),

    getSingle: builder.query({
      query: (id)=>({
        url: `/products/${id}`,
      })
    }),

    getCategory: builder.query({
      query: (query)=>({
        url: `/categories/${query}/products`,
      })
    }),

    // getCategory: builder.query({
    //   query: (category) => `products/?category=${category}`,
    // }),

  })

});

export const {useGetDetailQuery,useGetSingleQuery,useGetCategoryQuery,useAddProductMutation} = projectApi;