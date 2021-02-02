import React from "react";
import Pagination from "@material-ui/lab/Pagination";
import "./Paginate.css";

const Paginate = ({
  currentPage,
  isLoading,
  itemsPerPage,
  totalItems,
  pageSelected,
}) => {
  const totalPages = totalItems.length !== 0 ? Math.ceil(totalItems / itemsPerPage) : 0;

  return (
    <div className="paginate">
      <Pagination
        shape="rounded"
        variant="outlined"
        color="primary"
        page={currentPage}
        count={totalPages}
        showFirstButton
        showLastButton
        disabled={isLoading}
        onChange={(event, page) => pageSelected(page)}
      />
    </div>
  );
};

export default Paginate;
