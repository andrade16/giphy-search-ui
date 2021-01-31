import React, { useState } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import InputBase from "@material-ui/core/InputBase";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import Button from "@material-ui/core/Button";
import { useSearchStyles } from "./searchStyles";

const Search = ({ handleQuery, isLoading }) => {
  const [query, setQuery] = useState("");
  const classes = useSearchStyles();

  const onQuerySubmit = (event) => {
    event.preventDefault();
    handleQuery(query);
  };


  const onKeyDown = (event) => {
    event.preventDefault();
    if(event.key === "Enter") {
      handleQuery(query);
    }
  }

  return (
    <div className={classes.grow}>
      <AppBar position="sticky" className={classes.appBar}>
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="open drawer"
          >
            <MenuIcon />
          </IconButton>
          <Typography className={classes.title} variant="h6" noWrap>
            Giphy Search
          </Typography>

          <div className={classes.search}>
            <InputBase
              placeholder="Enter a search…"
              value={query}
              autoFocus={true}
              classes={{ root: classes.inputRoot, input: classes.inputInput }}
              inputProps={{ "aria-label": "search" }}
              onChange={(event) => setQuery(event.target.value)}
              onKeyUp={onKeyDown}
            />
          </div>
          <div>
            <Button
              variant="contained"
              type="submit"
              color="secondary"
              className={classes.searchButton}
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
