"use client";
import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { NavStyles } from "./style";
import useMediaQuery from "@mui/material/useMediaQuery";
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  //   height: "95vh",
  border: "2px solid black",
  color: theme.palette.text.secondary,
}));

const Example = () => {
  const matches = useMediaQuery("(min-width:600px)");

  return (
    <Box style={NavStyles.box}>
      <Grid container>
        <Grid item xs={matches != true ? 12 : 5}>
          <Item>
            <h1>Menú</h1>
          </Item>
        </Grid>
        {matches && (
          <>
            <Grid item xs={7}>
              <Item>
                <h1>List Card</h1>
              </Item>
            </Grid>
          </>
        )}
      </Grid>
    </Box>
  );
};
export default Example;
