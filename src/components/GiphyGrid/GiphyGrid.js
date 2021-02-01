import React, { useRef } from "react";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import "./GiphyGrid.css";

const GiphyGrid = ({ gifs, isLoading }) => {
  const imgCounter = useRef(0);

  // keep track of when individual gifs are done loading.
  // until all gis per page are done loading, display a progress bar
  const imageLoaded = () => {
    imgCounter.current += 1;
    if (imgCounter.current >= gifs.length) {
      isLoading(false);
      imgCounter.current = 0;
    }
  };

  return (
    <div className="giphy-grid-container">
      <GridList className="grid-list" cellHeight={160} cols={3}>
        {gifs.map((gif) => (
          <GridListTile key={gif.id} cols={1}>
            <img
              alt={gif.title}
              src={gif.images.fixed_width.url}
              onLoad={imageLoaded}
            />
          </GridListTile>
        ))}
      </GridList>
    </div>
  );
};

export default GiphyGrid;
