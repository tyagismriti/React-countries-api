const SearchBar = ({setQuery}) => {

  return (
    <>
      <div className="search-container">
      <i className="ri-search-line"></i>
      <input onChange={(e)=>{
            
       setQuery(e.target.value);
             
      }}type="text" placeholder="Search for a country..." />
      </div>
    </>
  )
}

export default SearchBar