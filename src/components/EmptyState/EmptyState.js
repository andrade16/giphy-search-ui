import React from "react";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import ImageSearchIcon from "@material-ui/icons/ImageSearch";
import "./EmptyState.css";

const EmptyState = () => {
  return (
    <div className="empty-state-container">
      <Container maxWidth="md">
        <Card className="empty-state-card" variant="outlined">
          <CardContent className="empty-state-card-content">
            <Typography
              id="empty-state-title"
              color="textSecondary"
              gutterBottom
            >
              No Gifs to Display!
            </Typography>
            <Typography>
              <ImageSearchIcon id="search-icon" />
            </Typography>
            <Typography id="empty-state-subtext" color="textSecondary">
              Go ahead and enter a new search to view gifs!
            </Typography>
          </CardContent>
        </Card>
      </Container>
    </div>
  );
};

export default EmptyState;
