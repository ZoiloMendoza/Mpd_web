"use client";
import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { GridStyles } from "./style";
import useMediaQuery from "@mui/material/useMediaQuery";
import Search from "./Search/Search";
import FormRegister from "./Form/Form";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  height: "80vh",
  // marginBottom: "15px",
  boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
  color: theme.palette.text.secondary,
}));

const GridBoard = () => {
  const matches = useMediaQuery("(min-width:800px)");

  return (
    <Box style={GridStyles.box}>
      <Grid container spacing={2}>
        <Grid item xs={matches != true ? 12 : 4}>
          <Search />
          <FormRegister />
        </Grid>
        {matches && (
          <>
            <Grid item xs={8}>
              <Item>
                <h1>Detalle Card</h1>
                {/* <SimplePaper /> */}
              </Item>
            </Grid>
          </>
        )}
      </Grid>
    </Box>
  );
};
export default GridBoard;
