import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';


const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        overflow: 'hidden',
        backgroundColor: theme.palette.background.paper,
        height: '70vh',
        margin: 25
    },
    gridList: {
        width: 500,
        height: 450,
    },
}));

const GiphyGrid = ({data}) => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <GridList cellHeight={160} className={classes.gridList} cols={3}>
                {data.map((gif) => (
                    <GridListTile key={gif.id} cols={1}>
                        <img src={gif.images.fixed_width.url}/>
                    </GridListTile>
                ))}
            </GridList>
        </div>
    )

}


export default GiphyGrid
