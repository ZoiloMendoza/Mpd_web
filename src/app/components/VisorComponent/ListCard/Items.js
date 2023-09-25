import * as React from 'react';

import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/material';
import useMediaQuery from "@mui/material/useMediaQuery";
export default function Items() {
    const matches = useMediaQuery("(min-width:1150px)");
  return (
    
      <ListItem  sx={{display: 'flex', justifiContent: 'space-between', alignItems: 'flex-start'}}>
        <ListItemAvatar>
          <Avatar alt="Zoy Mendoza" src="/static/images/avatar/1.jpg" />
        </ListItemAvatar>
        <ListItemText
          style={{ color: 'black', }}        
          primary="A-0289 Motor"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.secondary"
              >
                Azulejos - Servicios
              </Typography>
             
            </React.Fragment>
          }
        />
        {matches && <ListItemText
        style={{ color: 'black', flex: '1', textAlign:'right'}} 
          primary="Cotizar/Urgente"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.secondary"
              >
                Mar 10/23
              </Typography>
             
            </React.Fragment>
          }
        />}
      </ListItem>
      
    
  );
}