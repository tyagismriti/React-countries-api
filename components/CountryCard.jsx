import React from 'react'
import { Link } from 'react-router'

const CountryCard = ({image,country,population,region,capital,index}) => {
  return (
   <>
     <Link className="country-card" to={`/${country}`} key={index}>
     <div className='flag-container'>
        <img src={image} alt={image + ' Flag'} />
      </div>
      <div className="card-text">
        <h3 className="card-title">{country}</h3>
        <p>
          <b>population :&nbsp;</b>
          {population.toLocaleString('en-IN')}
        </p>
        <p>
          <b>Region :&nbsp;</b>{region} 
        </p>
        <p>
          <b>Capital :&nbsp; </b>{capital}
        </p>
    </div>
     </Link>
   </>
  )
}

export default CountryCard