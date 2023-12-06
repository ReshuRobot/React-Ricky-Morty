import ReactPaginate from "react-paginate";
import "./Pagination.css";
const Pagination = ({ info, setPageNumber }) => {
  return (
    <ReactPaginate
      nextLabel="Next"
      previousLabel={"Previous"}
      containerClassName={"react-paginate"}
      breakClassName="break-me"
      previousLinkClassName={"previous"}
      nextLinkClassName={"next"}
      activeClassName={"selected"}
      onPageChange={(data) => {
        setPageNumber(data?.selected + 1);
      }}
      pageCount={info?.pages}
    />
  );
};
export default Pagination;
