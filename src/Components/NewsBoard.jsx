// import React from 'react'

import { useEffect } from "react";
import { useState } from "react"
import NewsItem from "./NewsItem";

const NewsBoard = ({category}) => {
const [articles,setArticles]=useState([]);

useEffect(()=>{
    let url=`https://saurav.tech/NewsAPI/top-headlines/category/${category}/in.json`
    // let url=`https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${import.meta.env.VITE_API_KEY}`
    // let url=`https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=6070d3e21d1049ba93ee4916ff7660e2`
    fetch(url).then(response=>response.json()).then(data=>setArticles(data.articles))
},[category])

  return (
    <div>
      <h2 className="text-center">Latest <span className="badge bg-danger">News</span></h2>
      {articles && articles.map((news,index)=>{
        return <NewsItem key={index} title={news.title} description={news.description} src={news.urlToImage} url={news.url}/>
      })}
    </div>
  )
}

export default NewsBoard
