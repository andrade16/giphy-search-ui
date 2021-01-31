import React from 'react';
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import {makeStyles} from "@material-ui/core/styles";

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
        backgroundColor: 'blue'
    },
}));

const EmptyState = () => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Container maxWidth="md">
                <Typography component="div" className={classes.gridList} />
            </Container>
        </div>

    )
}

export default EmptyState;
