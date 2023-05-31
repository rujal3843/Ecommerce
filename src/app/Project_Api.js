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

    getProductsByPriceRange: builder.query({
      query: ({ priceMin, priceMax }) =>
        `products/?price_min=${priceMin}&price_max=${priceMax}`,
    }),
    
    addProduct: builder.mutation({
      query: (productData) => ({
        url: '/products',
        method: 'POST',
        body: productData,
      }),
    }),


  })

});

export const {useGetDetailQuery,useGetSingleQuery,useGetCategoryQuery,useAddProductMutation} = projectApi;