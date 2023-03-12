import React from 'react'

const NewsItem = (props) => {
  let { title, description, imageUrl, newsUrl, author, date } = props;
  return (
    <div className='my-3'>
      <div className="card" >
        <img src={!imageUrl ? "https://sportshub.cbsistatic.com/i/r/2023/03/05/6113a6d4-8ed7-4e94-959e-a14dbf6a322d/thumbnail/1200x675/a4d07b01f80853031c418f3a7c8ce41f/jon-jones-belt.jpg" : imageUrl} className="card-img-top" alt="pic here" />
        <div className="card-body">
          <h5 className="card-title">{title}...</h5>
          <p className="card-text">{description}...   </p>
          <p className='card-text'> <small className='text-muted'>By {author ? author : "Unknown"} on {new Date(date).toGMTString()} </small></p>
          <a href={newsUrl} rel="noreferrer" target="_blank" className="btn btn-sm btn-primary">Read more</a>
        </div>
      </div>
    </div>
  )

}

export default NewsItem