import { useState } from "react";
import FilterButton from "./Filter/FilterType/FilterButton";


const FilterCategory=({title,itemCards ,Task,setStatus,setPageNumber})=>{
    const [accordiantoggle,setAccordianToggle] = useState(false)
    // console.log(data);
    const [checkedIndex, setCheckedIndex] = useState(null);

    const handleAccordian =()=>{
   setAccordianToggle(!accordiantoggle);


    }
    const handleButtonClick = (index) => {
        setCheckedIndex(index);
      };
    return(
        <div>
            {/* Header */}
            <div className=" w-full mx-auto bg-gray-50 shadow-lg my-4 ">
            <div className="flex justify-between p-3" onClick ={ handleAccordian}>
   <span className="font-bold text-lg">{title}</span>
   <span className={`${accordiantoggle ? 'rotate-180' : ''}`}><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
</svg>
</span>
   
            </div>
            
           { accordiantoggle &&
           
            <div>
      {itemCards?.map((item,index) => (
        <div
          key={index}
          className="   m-2 text-left border-gray-200 border-b-2  flex"
        >
        <FilterButton name={title}
          setPageNumber={setPageNumber}
          item={item}
          Task={Task}
          index={index}
          onButtonClick={handleButtonClick}
           isChecked={checkedIndex === index}
        />
         {/* {item} */}
        </div>
      ))}
    </div> }

            {/* Accordain Body */}

        

        </div>
        </div>
    )
}
export default FilterCategory;