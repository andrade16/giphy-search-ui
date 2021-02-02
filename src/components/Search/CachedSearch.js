import { SEARCH_CHAR_THRESHOLD } from "../../utils/constants";

class CachedSearch {
  constructor(searchFunction, resultsHandler) {
    this.searchFunction = searchFunction;
    this.resultsHandler = resultsHandler;

    this.cache = {};
  }

  changeQuery(query) {
    if (query.length < SEARCH_CHAR_THRESHOLD) {
      //Only submit a search if it's more than three characters
      this.resultsHandler([]);
      return;
    }
    if (this.cache[query]) {
      // if search is cached, return that data;
      console.log("query retrieved from cache:", query);
      this.resultsHandler(this.cache[query]);
    } else {
      //otherwise, make an API call for the new search
      this.searchFunction(query).then((results) => {
        this.cache[query] = results;
        console.log("query added to cache:", query);
        this.resultsHandler(results);
      });
    }
  }
}

export default CachedSearch;
