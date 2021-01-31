import React from "react";

class CachedSearch {
  constructor(searchFunction, resultsHandler) {
    this.searchFunction = searchFunction;
    this.resultsHandler = resultsHandler;

    this.query = "";
    this.cache = {};
    this.cacheHitsHistory = [];
  }

  changeQuery(query) {
    if (query.length < 3) {
      this.resultsHandler([]);
      return;
    }
    if (this.cache[query]) {
      this.cacheHitsHistory.concat(query);
      console.log("query retrieved from cache:", query);
      this.resultsHandler(this.cache[query]);
    } else {
      this.searchFunction(query).then((results) => {
        this.cache[query] = results;
        console.log("query added to cache:", query);
        // console.log('NON_CACHED_RESULTS: ', results);
        this.resultsHandler(results);
      });
    }
  }
}

export default CachedSearch;
