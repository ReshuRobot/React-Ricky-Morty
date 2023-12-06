import FilterCategory from "../FilterCategory";
import style from "./Filter.module.scss";
const Filter = ({
  FilterSpecies,
  FilterStatus,
  FilterGender,
  setPageNumber,
}) => {
    const clear=()=>{
        FilterStatus("");
        FilterSpecies("");
        FilterGender("");
        setPageNumber("");
        window.location.reload(false);
    }
  return (
    <div className={style.filter_container}>
      <div className={style.filter_header}>Filter</div>
      <div className={style.filter_body}>
        <FilterCategory
          title={"Status"}
          Task={FilterStatus}
          setPageNumber={setPageNumber}
          itemCards={[" Alive", "Dead", "Unknown"]}
        />
        <FilterCategory
          title={"Species"}
          Task={FilterSpecies}
          setPageNumber={setPageNumber}
          itemCards={[
            "Human",
            "Alien",
            "Humanoid",
            "Poopybutthole",
            "Mythological",
            "Unknown",
            "Animal",
            "Disease",
            "Robot",
            "Cronenberg",
            "Planet",
          ]}
        />
        <FilterCategory
          setPageNumber={setPageNumber}
          title={"Gender"}
          Task={FilterGender}
          itemCards={["female", "male", "genderless", "unknown"]}
        />
      </div>
      <div className={style.filter_clear} onClick={clear}>Clear Filter</div>
    </div>
  );
};
export default Filter;
