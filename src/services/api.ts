import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

import { Restaurant } from '../pages/Home'

const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://fake-api-tau.vercel.app/api/efood/'
  }),
  endpoints: (builder) => ({
    getRestaurantSelected: builder.query<Restaurant, string>({
      query: (id) => `restaurantes/${id}`
    }),
    getRestaurants: builder.query<Restaurant[], void>({
      query: () => 'restaurantes'
    })
  })
})

export default api
export const { useGetRestaurantsQuery, useGetRestaurantSelectedQuery } = api
