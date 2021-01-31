const GIPHY_API_KEY = "brXMsD0cTFgrd7yQh6u17ilSMIhDz2t9";
const giphySearchUrl = "https://api.giphy.com/v1/gifs/search";

export async function searchGifs(query, offSet, itemsPerPage = 50) {
  try {
    const response = await fetch(
      `${giphySearchUrl}?api_key=${GIPHY_API_KEY}&q=${query}&offset=${offSet}&limit=${itemsPerPage}`
    );
    return response.json();
  } catch (error) {
    throw new Error(error.message);
  }
}
