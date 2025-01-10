import CountryCard from "./CountryCard"
import { useEffect, useState } from "react"
import CountriesListShimmer from "./CountriesListShimmer"


const CountriesList = ({query}) => {
  const [CountriesData,setCountriesData]=useState([])
useEffect(()=>{
  fetch('https://restcountries.com/v3.1/all')
    .then((res)=>res.json())
     .then((data)=>{
         setCountriesData(data)
     })
  },[])

  if(CountriesData.length===0){
     return <CountriesListShimmer />
  }
  return (
   <div className="countries-container">
    {CountriesData
  .filter((data) =>
    data.name.common.toLowerCase().includes(query) || data.region.toLowerCase().includes(query)
  )
  .map((data, i) => {
    return (
      
    
      <CountryCard 
        key={i} 
        image={data.flags.png} 
        country={data.name.official} 
        population={data.population} 
        capital={data.capital} 
        region={data.region} 
        index={i} 
      />
    );
  })}
   </div>
  
  )
}

export default CountriesList