import React, { useState, useMemo } from "react";
import Search from '../Search/Search';
import CachedSearch from '../Search/CachedSearch';
import {searchGifs} from '../../services/GiphyAPI';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import GiphyGrid from '../GiphyGrid/GiphyGrid';


const itemsPerPage = 50;

const GiphyScreen = () => {
  const [giphyData, setGiphyData] = useState([]);
  const [currentQuery, setCurrentQuery] = useState('');

  const cachedSearch = useMemo(() => new CachedSearch(searchGifs, setGiphyData), []);

  const handleQuerySubmit = (query) => {
    cachedSearch.changeQuery(query);
    setCurrentQuery(query);
  };

  console.log('DATA: ', giphyData);

  return (
    <div>
      <Search handleQuery={handleQuerySubmit} />
      <Container maxWidth="md" className="content-container">
          {/*<Typography component="div" style={{ backgroundColor: '#cfe8fc', height: '70vh', margin: 10 }} />*/}
          {giphyData.data
              ? <GiphyGrid data={giphyData.data}/>
              : <div>{'Nothing to show'}</div>
          }
      </Container>
    </div>
  );
};

export default GiphyScreen;
