import React, { useState, useMemo } from "react";
import Search from "../Search/Search";
import CachedSearch from "../Search/CachedSearch";
import { searchGifs } from "../../services/GiphyAPI";
import {ITEMS_PER_PAGE} from "../../utils/constants";
import Container from "@material-ui/core/Container";
import GiphyGrid from "../GiphyGrid/GiphyGrid";
import Paginate from "../Paginate/Paginate";
import EmptyState from "../EmptyState/EmptyState";
import LinearProgress from "@material-ui/core/LinearProgress";
import "./GiphyScreen.css";


const GiphyScreen = () => {
  const [giphyData, setGiphyData] = useState([]);
  const [currentQuery, setCurrentQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);

  const cachedSearch = useMemo(
    () => new CachedSearch(searchGifs, setGiphyData),
    []
  );

  const handleQuerySubmit = (query) => {
    setIsLoading(true);
    cachedSearch.changeQuery(query);
    setCurrentQuery(query);
    setCurrentPage(1);
    if(cachedSearch.cache[query]) {
      setIsLoading(false);
    }
  };

  const pageSelected = (pageNumber) => {
    setIsLoading(true);
    setCurrentPage(pageNumber);
    // calculate offset to fetch next set of data;
    let offset = pageNumber * ITEMS_PER_PAGE - ITEMS_PER_PAGE;
    searchGifs(currentQuery, offset).then((data) => setGiphyData(data));
  };

  const handleLoading = (loading) => {
    setIsLoading(loading);
  };

  const data = giphyData.data || [];

  return (
    <div>
      <Search handleQuery={handleQuerySubmit}/>
      {isLoading && data.length ? (
        <LinearProgress color="secondary" variant="indeterminate" />
      ) : (
        <div className="progress-placeholder"/>
      )}
      <Container maxWidth="md">
        {data && data.length ? (
          <GiphyGrid gifs={data} isLoading={handleLoading} />
        ) : (
          <EmptyState />
        )}
      </Container>
      <div className="paginate-container">
        <Paginate
          currentPage={currentPage}
          itemsPerPage={ITEMS_PER_PAGE}
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
