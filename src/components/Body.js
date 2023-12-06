
import { useEffect, useState } from "react";

import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import Pagination from "./Pagination";
import Filter from "./Filter/Filter";
import "./Body.css";
import CharacterCard from "./CharacterCard";

const BodyContainer = () => {
  //Local
  const [resData, setresData] = useState([]);
  const [filterData, setFilterData] = useState([]);
  const [searchText,setSearchText] = useState("");
  const [pageNumber, setPageNumber] = useState(1);
  const [status,setStatus] = useState("");
  const[species, setSpecies]=useState("");
  const[gender,setGender]=useState("");

  useEffect(() => {
    fetchData(pageNumber,searchText);
  }, [pageNumber,searchText,gender,status,species]);

  const fetchData = async (pageNumber) => {
    const data = await fetch(
      `https://rickandmortyapi.com/api/character/?page=${pageNumber}&name=${searchText}&status=${status}&gender=${gender}&species=${species}`
    );
    const json = await data.json();
 

    setresData(json);
    setFilterData(json?.results);
  
  };

  if (filterData?.length === 0  )  {
    return (
      <div>
        <Shimmer />
      </div>
    );
  } 
 
  return (
    
    <div className="body px-20">
    <div className="body-container">
    <div className="sidebar"><Filter FilterSpecies={setSpecies} FilterStatus={setStatus}FilterGender={setGender}setPageNumber={setPageNumber}/></div>
    <div className="right-container">
    <div className="filter-container">
    <div className="filter my-5 mx-5">
    
    <input type="text"
    className="search-box border border-black"
    value={searchText}
    onChange={(e)=>{
      setPageNumber(1);
      setSearchText(e.target.value);
    }}

    ></input>
    <div className="search-icon">
    {/* Add your search SVG here */}
    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="40" height="40" viewBox="0 0 40 30">
<path d="M 13 3 C 7.4889971 3 3 7.4889971 3 13 C 3 18.511003 7.4889971 23 13 23 C 15.396508 23 17.597385 22.148986 19.322266 20.736328 L 25.292969 26.707031 A 1.0001 1.0001 0 1 0 26.707031 25.292969 L 20.736328 19.322266 C 22.148986 17.597385 23 15.396508 23 13 C 23 7.4889971 18.511003 3 13 3 z M 13 5 C 17.430123 5 21 8.5698774 21 13 C 21 17.430123 17.430123 21 13 21 C 8.5698774 21 5 17.430123 5 13 C 5 8.5698774 8.5698774 5 13 5 z"></path>
</svg>
  </div>
    
        {/* <button
          className="filter-btn mx-5 border bg-teal-400
           border-l-cyan-400 p-1 rounded-lg text-white"
          onClick={() => {
            //filter data on basis of avg rating
            const filterData = resData.filter(
              (val) => val?.info?.avgRating > 4
            );
            setFilterData(filterData);
          }}
        >
          Top Rated Restaurants
        </button> */}
        {/* <button onClick={() => setresData(resList)}>Clear</button> */}
      </div>
      </div>
      <div className="res-container">

      {
      filterData ?

        filterData?.map((item) => (
          <Link to={"./characters/" + item?.id}>
          <CharacterCard  resData={item} />
          </Link>
        ))
        :<div className="nodata-found">No data Found!</div>
        
        
        }
      </div>
      </div>
      </div>
    {filterData && 
      <Pagination info ={resData?.info}setPageNumber={setPageNumber}/>}
    </div>
  );
};
export default BodyContainer;
