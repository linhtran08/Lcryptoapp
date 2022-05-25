import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import news from "../components/News";

const cryptoNewsApiHeaders ={
  'X-BingApis-SDK': 'true',
  'X-RapidAPI-Host': 'bing-news-search1.p.rapidapi.com',
  'X-RapidAPI-Key': 'eab3bf9c50mshaf19f0a06b4c2c9p1cfccdjsn489f5745f7fc'
}

const baseUrl = 'https://bing-news-search1.p.rapidapi.com'

const createRequest = (url) => ({url, headers: cryptoNewsApiHeaders})

export const cryptoNewsApi = createApi({
  reducerPath: 'cryptoNewsApi',
  baseQuery: fetchBaseQuery({baseUrl}),
  endpoints: (builder)=>({
    getCryptosNews: builder.query({
      query: ({newsCategory, count})=> createRequest(`/news/search?q=${newsCategory}&safeSearch=Off&textFormat=Raw&freshness=Day&count=${count}`)
    })
  })
})

export const {useGetCryptosNewsQuery} = cryptoNewsApi