import { useState } from "react";

const FilterButton =({name,index,item,setPageNumber,Task,isChecked,onButtonClick})=>{
  
    return(
    
            <div className="radioButton p-2  flex  gap-2 w-full">
                <input
                    className="radio-input"
                    type="radio"
                    checked={isChecked}
                    name={name}
                    id={`${name}-${index}`} 
                   onClick={()=>{
                    setPageNumber(1);
                    Task(item);
                   onButtonClick(index);
                   }}
                    
                    
                />
                <label className="border-yellow-400 w-full cursor-pointer"  for ={`${name}-${index}`}>
                <div>{item}</div> </label>
            </div>
           
    )
}
export default FilterButton;