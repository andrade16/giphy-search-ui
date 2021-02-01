# Giphy Search

This is a simple UI project that lets you enter a search term to search through various gifs provided by the [Giphy API](https://developers.giphy.com/docs/api/). 


## Setup Instructions and Commands

Navigate to the root directory of the project and run the following commands:

- `npm install` - installs all project dependencies
- `npm start` - Runs the app in the development mode. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.
- `npm test` - Runs snapshot tests. Launches the test runner in the interactive watch mode

### Additional Commands
- `npm test` - launches the test runner in interactive watch mode. To run all the tests, press `a` on your keyboard.


## Technologies Used 
For this UI project, [Create React App](https://github.com/facebook/create-react-app) was used to get started on development right away.
Another useful feature was that a testing framework ([Jest](https://jestjs.io/)) was included as well. 

For the component library, I decided to use [Material-UI](https://material-ui.com/). Part of the reason being that I have some familiarity with it
and I think they do a wonderful job in regard to documentation. Since the last time I used it, updates were made to the library that changed the way styling was applied to the components. 
This took some getting used to. I tried to apply styles my own way where I could. 


## Functionality
Using this app is pretty straight forward. Once it loads up, you're welcome to enter a search term to query the Giphy API.
 - On the app's initial load, and if your search query returns no results, the user should see an empty state component.
 - If your search does contain results, then you'll see those results start to render on the screen, while a loading indicator displays as well.
 - Additionally, if your search query returns results, then you'll also see a pagination component that will let you paginate through the various gifs you got back. 


## Design Choices
There were a few choices I made related to UI design that I want to point out. The reasoning behind some of these choices will be explained as well. 
- Loading Indicator:  Initially, I had implemented a skeleton loading indicator. Essentially, I chose not to display any gifs until all gifs on a page were done loading. 
  Eventually I realized that some gifs would take longer to load than others. So, with that in mind, in an effort to show the user some data (instead of none) I decided to implement a loading indicator instead.
  With the new implementation, you'll see certain gifs load faster than others, but you'll also see a progress bar that will continue to display until all gifs on a page are done loading.
  This provides the user feedback that lets them know some processing is still being done, but also shows them data when it's available.
  
- Gif Display: The gifs are displayed in a basic grid, much like how they're displayed on your phone when you're searching through the gif messaging tool.

- Searching: I chose to put a character threshold for when a search is executed. That threshold is 3 characters long. If the search term is less than 3 characters long, then nothing happens when a search is submitted.
 I decided to do this because it allows the giphy API to return a reasonable number of results for a search, rather than a ridiculously large number of results based off a single character or two. 
 
- UI: the app should be mobile friendly
