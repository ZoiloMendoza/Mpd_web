"use client";
import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";

//icons menu
import RequestQuoteIcon from "@mui/icons-material/RequestQuote";
import SummarizeIcon from "@mui/icons-material/Summarize";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import LocalMallIcon from "@mui/icons-material/LocalMall";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import EditIcon from "@mui/icons-material/Edit";
import Button from "@mui/material/Button";

import Link from "next/link";
import Navbar from "../../Navbar/Navbar";
import { NavStyles } from "../../Navbar/style";
import GridComponent from "../GridBody/GridComponent";
const drawerWidth = 160;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(6)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(6)} + 1px)`,
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

export const MiniDrawer = () => {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar position="fixed" open={open} style={NavStyles.settings}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{
              marginRight: 2,
              ...(open && { display: "none" }),
            }}
          >
            <MenuIcon style={NavStyles.colorIcons} />
          </IconButton>
          <Navbar />
        </Toolbar>
      </AppBar>
      <Drawer variant="permanent" open={open}>
        <DrawerHeader style={NavStyles.settings}>
          <ListItem disablePadding style={NavStyles.ListItemDrawer}>
          
            <p>Menú Motores</p>
           </ListItem>
          
          <IconButton onClick={handleDrawerClose} style={{padding: '0px 0px'}}>
            {theme.direction === "rtl" ? (
          
            
               <ChevronLeftIcon style={NavStyles.colorIcons} />
               
            ) : (
             
               
              <ChevronLeftIcon style={NavStyles.colorIcons} />
             
            )}
          </IconButton>
        </DrawerHeader>
        {/* <Divider /> */}
        {/* start links */}
        <nav aria-label="main mailbox folders">
          <List>
            <ListItem disablePadding style={NavStyles.ListItemMenu}>
              <ListItemButton>
                {open === true ? (
                  <Link href="/">
                    <Button
                      variant="outlined"
                      style={{
                        borderRadius: "50px",
                        background: "#D82E20",
                        border: "none",
                        textTransform: "capitalize",
                        color: "white",
                        fontSize: "16px",
                      }}
                      startIcon={<EditIcon />}
                    >
                      <span> Nuevo</span>
                    </Button>
                  </Link>
                ) : (
                  <Link href="/">
                    <ListItemIcon style={NavStyles.listWidthMenu}>
                      <EditIcon style={NavStyles.iconMenu} />
                    </ListItemIcon>
                  </Link>
                )}
              </ListItemButton>
            </ListItem>

            <ListItem disablePadding style={NavStyles.ListItemMenu}>
              <ListItemButton>
                <Link href="/">
                  <ListItemIcon style={NavStyles.listWidthMenu}>
                    <RequestQuoteIcon style={NavStyles.iconMenu} />
                  </ListItemIcon>
                </Link>
                <p>Cotizar</p>
              </ListItemButton>
            </ListItem>

            <ListItem disablePadding style={NavStyles.ListItemMenu}>
              <ListItemButton>
                <Link href="/">
                  <ListItemIcon style={NavStyles.listWidthMenu}>
                    <SummarizeIcon style={NavStyles.iconMenu} />
                  </ListItemIcon>
                </Link>
                <p>Requisitar</p>
              </ListItemButton>
            </ListItem>

            <ListItem disablePadding style={NavStyles.ListItemMenu}>
              <ListItemButton>
                <Link href="/">
                  <ListItemIcon style={NavStyles.listWidthMenu}>
                    <CheckCircleIcon style={NavStyles.iconMenu} />
                  </ListItemIcon>
                </Link>
                <p>Autorizar</p>
              </ListItemButton>
            </ListItem>

            <ListItem disablePadding style={NavStyles.ListItemMenu}>
              <ListItemButton>
                <Link href="/">
                  <ListItemIcon style={NavStyles.listWidthMenu}>
                    <LocalMallIcon style={NavStyles.iconMenu} />
                  </ListItemIcon>
                </Link>
                <p>Comprar</p>
              </ListItemButton>
            </ListItem>

            <ListItem disablePadding style={NavStyles.ListItemMenu}>
              <ListItemButton>
                <Link href="/">
                  <ListItemIcon style={NavStyles.listWidthMenu}>
                    <LocalShippingIcon style={NavStyles.iconMenu} />
                  </ListItemIcon>
                </Link>
                <p>Entregar</p>
              </ListItemButton>
            </ListItem>
          </List>
        </nav>
        {/* end links */}
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        {/*<DrawerHeader />*/}
        {/*<p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Rhoncus
          dolor purus non enim praesent elementum facilisis leo vel. Risus at
          ultrices mi tempus imperdiet. Semper risus in hendrerit gravida rutrum
          quisque non tellus. Convallis convallis tellus id interdum velit
          laoreet id donec ultrices. Odio morbi quis commodo odio aenean sed
          adipiscing. Amet nisl suscipit adipiscing bibendum est ultricies
          integer quis. Cursus euismod quis viverra nibh cras. Metus vulputate
          eu scelerisque felis imperdiet proin fermentum leo. Mauris commodo
          quis imperdiet massa tincidunt. Cras tincidunt lobortis feugiat
          vivamus at augue. At augue eget arcu dictum varius duis at consectetur
          lorem. Velit sed ullamcorper morbi tincidunt. Lorem donec massa sapien
          faucibus et molestie ac.
                </p>*/}
         <GridComponent/>
      </Box>
    </Box>
  );
};

export default MiniDrawer;
