
import FilterButton from "./Filter/FilterType/FilterButton";

const ItemList = ({ title,items ,Task,setPageNumber,}) => {
 

  // const itemPerCount = useSelector((store) => store.cart.items);
  // const handleClick = (item) => {
  //   dispatch(addItem(item));
  // };



  return (
    <div>
      {items?.map((item,index) => (
        <div
          key={index}
          className="   m-2 text-left border-gray-200 border-b-2  flex"
        >
        <FilterButton name={title}
          index={index}
          setPageNumber={setPageNumber}
          item={item}
          Task={Task}
        />
         {/* {item} */}
        </div>
      ))}
    </div>
  );
};
export default ItemList;
