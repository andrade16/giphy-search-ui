import React from "react";
import Pagination from "@material-ui/lab/Pagination";

const Paginate = ({ currentPage, itemsPerPage, totalItems, pageSelected }) => {
  console.log("TOTAL_ITEMS: ", totalItems);

  const totalPages =
    totalItems.length !== 0 ? Math.ceil(totalItems / itemsPerPage) : 0;
  console.log("TOTAL_PAGES: ", totalPages);

  return (
    <div className="paginate" style={{ overflowY: "scroll", marginTop: 5 }}>
      <Pagination
        shape="rounded"
        variant="outlined"
        color="primary"
        page={currentPage}
        count={totalPages}
        showFirstButton
        showLastButton
        onChange={(event, page) => pageSelected(page)}
      />
    </div>
  );
};

export default Paginate;
