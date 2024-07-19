import React from "react";
import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import "./Style.css";

const CardComponentImage = ({ image, title, text }) => {
  return (
    <Card className="cardImage box">
      <CardMedia
        component="img"
        image={image}
        alt={title}
        className="cardImage-media "
      />
      <CardContent>
        <Typography className="cardImage-heading">{title}</Typography>
        <Typography
          variant="body2"
          color="text.secondary"
          className="cardImage-text"
        >
          {text}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default CardComponentImage;
