import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const cryptoApiHeaders = {
  'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com',
  'X-RapidAPI-Key': 'ca00c58e14msh57adf72792de517p160518jsna454f58d98b9'
};

const baseUrl = 'https://coinranking1.p.rapidapi.com'

const createRequest = (url) => ({url, headers: cryptoApiHeaders})

export const cryptoApi = createApi({
  reducerPath: 'cryptoApi',
  baseQuery: fetchBaseQuery({baseUrl}),
  endpoints: (builder)=>({
    getCryptos: builder.query({
      query: (count)=> createRequest(`/coins?limit=${count}`)
    }),
    getExchanges: builder.query({
      query: (count)=> createRequest(`/coins?limit=${count}`)
    }),
    getCryptosDetails: builder.query({
      query: (coinId)=> createRequest(`/coin/${coinId}`)
    }),
    getCryptosHistory: builder.query({
      query: ({coinId, timePeriod})=> createRequest(`/coin/${coinId}/history/?timePeriod=${timePeriod}`)
    })
  })
})

export const { useGetCryptosQuery,useGetExchangesQuery ,useGetCryptosDetailsQuery, useGetCryptosHistoryQuery } = cryptoApi

