import React from "react";
import { Grid } from "@mui/material";
import Search from "./Select";
import { Container } from "@mui/system";
import Add from "./add";

function Main() {
  return (
    <div>

      <Container>
        <Grid container direction="row">
          <div className=" text-xl">Sub-Group</div>
          <div>
            <Search />
          </div>
          <Add />
        </Grid>
      </Container>
    </div>
  );
}

export default Main;
