import React, { useState, useMemo } from "react";
import Search from "../Search/Search";

const itemsPerPage = 50;

const GiphyScreen = () => {
  const [giphyData, setGiphyData] = useState([]);

  const handleQuerySubmit = (query) => {
    console.log("QUERY_IN_PARENT: ", query);
  };

  return (
    <div>
      <Search handleQuery={handleQuerySubmit} />
    </div>
  );
};

export default GiphyScreen;
