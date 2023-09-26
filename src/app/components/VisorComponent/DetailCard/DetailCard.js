import * as React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Items from "../ListCard/Items";
import InputAdornments from "./Contenido";
export default function SimplePaper() {
  return (
    <Box sx={{display: 'flex', flexDirection:'column', width:'100%', justifyContent: 'center' }}>
      <Paper>
        <Items />
        <InputAdornments />
      </Paper>
    </Box>
  );
}
