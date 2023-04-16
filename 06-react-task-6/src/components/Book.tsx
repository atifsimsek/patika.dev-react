import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import img1 from "../assets/logo.png";
import Image from "next/image";
import { flexCenter } from "@/styles/commonStyle";

export default function Book() {
  return (
    <Card sx={{ maxWidth: 345, ...flexCenter, flexDirection: "column" }}>
      <CardActionArea sx={{}}>
        <Image src={img1} width={300} alt={"resim"} />
        <CardContent>
          <Typography
            gutterBottom
            textAlign={"center"}
            variant="h5"
            component="div"
          >
            Lizard
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
      </CardActions>
    </Card>
  );
}
