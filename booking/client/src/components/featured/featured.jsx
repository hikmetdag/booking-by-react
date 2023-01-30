import React from 'react'
import './featured.css'
import useFetch from '../../hooks/useFetch';

const Featured = () => {
    const { data, loading, error } = useFetch("/hotels/countByCity?cities=zwolle,amsterdam,rotterdam");
    console.log(data);
  return (
    <div className='featured'>
        <div className="featuredItem">
            <img className='featuredImg' src="https://www.touristserver.nl/img/238151-1663694876/C800X560/Zwolle+op+hoogte.jpg" alt="" />
            <div className="featuredTitles">
                <h1>Zwolle</h1>
                <h2>{data[0]}</h2>
            </div>
        </div>
        <div className="featuredItem">
            <img className='featuredImg' src="https://www.celebritycruises.com/blog/content/uploads/2021/11/amsterdam-center-singel-canal-hero-1024x683.jpg" alt="" />
            <div className="featuredTitles">
                <h1>Amsterdam</h1>
                <h2>{data[1]}</h2>
            </div>
        </div>
        <div className="featuredItem">
            <img className='featuredImg' src="https://cdn.sanity.io/images/1wyn2xo2/production/ea790bb2e8a5d6903f47086f3a1106c170e778b8-2677x1119.jpg?fp-x=0.5211640211640212&fp-y=0.542193024649165&w=476&h=285&q=60&fit=crop&crop=focalpoint&dpr=2.625" alt="" />
            <div className="featuredTitles">
                <h2>Rotterdam</h2>
                <h3>{data[2]}</h3>
            </div>
        </div>
      
    </div>
  )
}

export default Featured
