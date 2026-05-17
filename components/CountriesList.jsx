import CountryCard from "./CountryCard"
import { useEffect, useState } from "react"
import CountriesListShimmer from "./CountriesListShimmer"
import Error from "./Error"


const CountriesList = ({query}) => {
  const [CountriesData, setCountriesData] = useState([])
  const [error, setError] = useState(false)

  useEffect(() => {
    fetch('https://restcountries.com/v3.1/all?fields=name,flags,population,capital,region')
      .then((res) => {
        if (!res.ok) throw new Error('API error')
        return res.json()
      })
      .then((data) => {
        if (Array.isArray(data)) {
          setCountriesData(data)
        } else {
          setError(true)
        }
      })
      .catch(() => setError(true))
  }, [])

  if (error) return <Error />

  if (CountriesData.length === 0) {
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