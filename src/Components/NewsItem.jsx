// import React from 'react'
import NewsImage from '../assets/news.png'

const NewsItem = ({title,description,src,url}) => {
  return (
  <div className="card bg-dark text-light mb-4 d-inline-block my-2 mx-2 py-2 px-2 " style={{maxWidth:"345px",maxHeight:"480px"}}>
  <img src={src?src:NewsImage}className="card-img-top" style={{height:"200px",width:"330px"}} alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{title.slice(0,50)}</h5>
    <p className="card-text">{description?description.slice(0,90):"News is important, but description is not available. You can click read more."}</p>
    <a href={url} className="btn btn-primary">Read More</a>
  </div>
</div>
  )
}

export default NewsItem
