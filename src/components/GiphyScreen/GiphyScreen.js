import React, { useState, useMemo } from "react";
import Search from "../Search/Search";
import CachedSearch from "../Search/CachedSearch";
import { searchGifs } from "../../services/GiphyAPI";
import Container from "@material-ui/core/Container";
import GiphyGrid from "../GiphyGrid/GiphyGrid";
import Paginate from "../Paginate/Paginate";
import EmptyState from "../EmptyState/EmptyState";

const itemsPerPage = 50;

const GiphyScreen = () => {
  const [giphyData, setGiphyData] = useState([]);
  const [currentQuery, setCurrentQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const cachedSearch = useMemo(
    () => new CachedSearch(searchGifs, setGiphyData),
    []
  );

  const handleQuerySubmit = (query) => {
    cachedSearch.changeQuery(query);
    setCurrentQuery(query);
    setCurrentPage(1);
  };

  const pageSelected = (pageNumber) => {
    setCurrentPage(pageNumber);

    // this calculation helps with setting the correct offset when making large jumps between pages
    let offset = pageNumber * itemsPerPage - itemsPerPage;
    searchGifs(currentQuery, offset).then((data) => setGiphyData(data));
  };

  console.log("DATA: ", giphyData);

  return (
    <div>
      <Search handleQuery={handleQuerySubmit} />
      <Container maxWidth="md" className="content-container">
        {giphyData.data ? (
          <GiphyGrid gifs={giphyData.data} />
        ) : (
          <EmptyState/>
        )}
      </Container>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Paginate
          currentPage={currentPage}
          itemsPerPage={itemsPerPage}
          totalItems={
            giphyData.pagination ? giphyData.pagination.total_count : []
          }
          pageSelected={pageSelected}
        />
      </div>
    </div>
  );
};

export default GiphyScreen;
