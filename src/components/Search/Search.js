import React, { useState } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import GifIcon from "@material-ui/icons/Gif";
import Typography from "@material-ui/core/Typography";
import InputBase from "@material-ui/core/InputBase";
import SearchIcon from "@material-ui/icons/Search";
import Button from "@material-ui/core/Button";
import "./Search.css";

const Search = ({ handleQuery }) => {
  const [query, setQuery] = useState("");

  const onQuerySubmit = (event) => {
    event.preventDefault();
    handleQuery(query);
  };

  const onKeyUp = (event) => {
    event.preventDefault();
    if (event.key === "Enter") {
      handleQuery(query);
    }
  };

  return (
    <div className="app-bar-container">
      <AppBar position="sticky" className="app-bar">
        <Toolbar>
          <IconButton
            edge="start"
            disableRipple={true}
            disableFocusRipple={true}
            disableTouchRipple={true}
            id="gif-button"
            href="https://giphy.com/"
            target="_blank"
            color="inherit"
            aria-label="gif link"
          >
            <GifIcon fontSize="large" />
          </IconButton>
          <Typography id="gif-title" variant="h6" noWrap>
            Giphy Search
          </Typography>

          <div className="search-container">
            <InputBase
              placeholder="Enter a search…"
              autoComplete="off"
              value={query}
              autoFocus={true}
              id="search-input"
              inputProps={{ "aria-label": "search" }}
              onChange={(event) => setQuery(event.target.value)}
              onKeyUp={onKeyUp}
            />
          </div>
          <div>
            <Button
              variant="contained"
              type="submit"
              color="secondary"
              id="search-button"
              endIcon={<SearchIcon />}
              onClick={onQuerySubmit}
            >
              Search
            </Button>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Search;
