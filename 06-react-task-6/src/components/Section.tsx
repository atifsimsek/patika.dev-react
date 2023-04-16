import { Grid } from "@mui/material";
import Book from "./Book";

const Section = () => {
  return (
    <Grid container gap={5} justifyContent="center" sx={{ mt: 5 }}>
      {Array.from(Array(6)).map((_, index) => (
        <Grid md={2} key={index}>
          <Book></Book>
        </Grid>
      ))}
    </Grid>
  );
};

export default Section;
