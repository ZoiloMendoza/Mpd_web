import * as React from 'react';
import Box from '@mui/material/Box';
import MenuList from '@mui/material/MenuList';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Typography from '@mui/material/Typography';
import DraftsIcon from '@mui/icons-material/Drafts';
import SendIcon from '@mui/icons-material/Send';
import PriorityHighIcon from '@mui/icons-material/PriorityHigh';

export default function InputAdornments() {
  return (
    <MenuList
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <MenuItem sx={{ display: "flex", flexWrap: "wrap" }}>
        <Typography
          sx={{ flex: "1", minWidth: "50%", textAlign: "initial" }}
          variant="subtitle1"
        >
          Usuario: Jacobo
        </Typography>
        <Typography
          sx={{ flex: "1", minWidth: "50%", textAlign: "initial" }}
          variant="subtitle1"
        >
          O.S: 89000
        </Typography>
        <Typography
          sx={{ flex: "1", minWidth: "50%", textAlign: "initial" }}
          variant="subtitle1"
        >
          Mini: A-FF
        </Typography>
        <Typography
          sx={{ flex: "1", minWidth: "50%", textAlign: "initial" }}
          variant="subtitle1"
        >
          {" "}
          Golpe: A-0289
        </Typography>
      </MenuItem>
      <MenuItem sx={{ display: "flex", flexWrap: "wrap" }}>
        <Typography
          sx={{ minWidth: "50%", textAlign: "initial" }}
          variant="subtitle1"
        >
          Proveedor: Tegsa
        </Typography>
        <Typography
          sx={{ flex: "1", minWidth: "50%", textAlign: "initial" }}
          variant="subtitle1"
        >
          Fecha Inicio: Mar 13 23
        </Typography>
        <Typography
          sx={{ flex: "1", minWidth: "50%", textAlign: "initial" }}
          variant="subtitle1"
        >
          Potencia: 22 kW
        </Typography>
        <Typography
          sx={{ flex: "1", minWidth: "50%", textAlign: "initial" }}
          variant="subtitle1"
        >
          Fecha Inicio: Abr 13 23
        </Typography>
        <Typography
          sx={{ flex: "1", minWidth: "50%", textAlign: "initial" }}
          variant="subtitle1"
        >
          Tipo elemento: Motor eléctrico
        </Typography>
      </MenuItem>
      <MenuItem sx={{ display: "flex" }}>
        <Typography variant="subtitle1" sx={{ flex: "1", minWidth: "50%", textAlign: "initial" }}>Descripcción:</Typography>
      </MenuItem>
      <Typography  variant="p" sx={{}}>
        body1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
        blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur,
        neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum
        quasi quidem quibusdam.
      </Typography>
    </MenuList>
  );
}