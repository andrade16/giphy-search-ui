# Giphy Search

This is a simple UI project that lets you enter a search term to search through various gifs provided by the [Giphy API](https://developers.giphy.com/docs/api/).

## Setup Instructions and Commands

Navigate to the root directory of the project and run the following commands:

- `npm install` - installs all project dependencies
- `npm start` - Runs the app in the development mode. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### Additional Commands

- `npm test` - Runs snapshot tests. Launches the test runner in interactive watch mode. To run all the tests, press `a` on your keyboard.

## Technologies Used

For this UI project, [Create React App](https://github.com/facebook/create-react-app) was used to get started on development right away. Additionally I decided to use [Material-UI](https://material-ui.com/) for the component library. Part of the reason being that I have some familiarity with it
and I think they do a wonderful job in regard to documentation.

## Functionality

Using this app is pretty straightforward. Once it loads up, you're welcome to enter a search term to query the Giphy API.

- On the app's initial load, and if your search query returns no results, the user should see an empty state component.
- If your search does contain results, then you'll see those results start to render on the screen, while a loading indicator displays as well.
- Additionally, if your search query returns results, then you'll also see a pagination component.

## Design Choices

There were a few choices I made related to UI design that I want to point out. The reasoning behind some of these choices will be explained as well.

- Loading Indicator: Initially, I had implemented a skeleton loading indicator. Essentially, I chose not to display any gifs until all gifs on a page were done loading.
  Eventually I realized that some gifs would take longer to load than others. So, with that in mind, in an effort to show the user some data (instead of none) I decided to implement a loading indicator instead.
  With the new implementation, you'll see certain gifs load faster than others, but you'll also see a progress bar that will continue to display until all gifs on a page are done loading.
  This provides the user feedback that lets them know some processing is still being done, but also shows them data when it's available.
- Gif Display: The gifs are displayed in a basic grid, much like how they're displayed on your phone when you're searching through the gif messaging tool.

- Searching: I chose to put a character threshold for when a search is executed. That threshold is 3 characters long. If the search term is less than 3 characters long, then nothing happens when a search is submitted.
  I decided to do this because it allows the giphy API to return a more reasonable number of results for a search, rather than a ridiculously large number of results based off a single character or two.
  
- Cache: As of right now, only the first set of search results gets cached. From there, you fetch additional data when you interact with pagination. I saw the alternative being that all data is fetched for a query on the initial search.
  But, because a search can return thousands of gifs, this would introduce some performance issues.

- Pagination: I decided to disable the pagination component while gifs are loading. This is to avoid paginating through and making new API calls while data is still loading.

- UI: the app should be mobile friendly.

## Additional Notes

- The Giphy API seems to impose an offset limit, and i'm not sure if it's intentional.
  This presents some unexpected behavior for the app. Because of this offset limit, if you search for a term and get a lot of data back that results in a few hundred pages, when you try to skip to the last page, if the offset is over 4999, then no data is returned (even though there's still data to fetch and display).
  This may look like a bug, but I double checked to make sure the offset I was setting was valid, and it is based on total results for a search.
  Please see the two issues below for a better understanding of the problem: 
  - https://github.com/Giphy/GiphyAPI/issues/94 
  - https://github.com/Giphy/GiphyAPI/issues/88
- Thanks for your consideration!
