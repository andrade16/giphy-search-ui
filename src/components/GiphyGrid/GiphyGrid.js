import React, {useState, useRef, useEffect} from "react";
import {makeStyles} from "@material-ui/core/styles";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import Skeleton from '@material-ui/lab/Skeleton';


const useStyles = makeStyles((theme) => ({
    root: {
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-around",
        overflow: "hidden",
        backgroundColor: theme.palette.background.paper,
        height: "70vh",
        margin: 25,
    },
    gridList: {
        width: 700,
        height: 450,
    },
}));

const GiphyGrid = ({gifs}) => {
    const classes = useStyles();
    const [isLoading, setIsLoading] = useState(true);
    const counter = useRef(0);

    useEffect(() => {
        setIsLoading(true)
    }, [gifs])

    const imageLoaded = () => {
        counter.current += 1;
        if (counter.current >= gifs.length) {
            setIsLoading(false);
            counter.current = 0;
        }
    }


    return (
        <div className={classes.root}>
            <GridList cellHeight={160} className={classes.gridList} cols={3}>
                {gifs.map((gif) => (
                    <GridListTile key={gif.id} cols={1}>
                        <div style={{display: isLoading ? 'block' : 'none'}} >
                            <Skeleton variant="rect" width={210} height={118}/>
                        </div>
                        <div style={{display: isLoading ? 'none' : 'block'}}>
                            <img
                                alt={gif.title}
                                src={gif.images.fixed_width.url}
                                onLoad={imageLoaded}
                            />
                        </div>
                    </GridListTile>
                ))}
            </GridList>
        </div>
    );
};

export default GiphyGrid;
