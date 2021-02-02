import { ITEMS_PER_PAGE } from "../utils/constants";
const GIPHY_API_KEY = "brXMsD0cTFgrd7yQh6u17ilSMIhDz2t9";
const GIPHY_SEARCH_URL = "https://api.giphy.com/v1/gifs/search";

export async function searchGifs(query, offSet, itemsPerPage = ITEMS_PER_PAGE) {
  try {
    const response = await fetch(
      `${GIPHY_SEARCH_URL}?api_key=${GIPHY_API_KEY}&q=${query}&offset=${offSet}&limit=${itemsPerPage}`
    );
    return response.json();
  } catch (error) {
    throw new Error(error.message);
  }
}
