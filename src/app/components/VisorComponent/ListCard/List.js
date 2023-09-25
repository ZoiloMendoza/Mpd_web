import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import BasicSelect from './SelectBasic';
import { Box } from '@mui/material';

import Items from './Items';
export default function AlignItemsList() {
  return (
    <Box sx={{width: '100%'}}>
    <BasicSelect/>
    
    <List sx={{ width: '100%' ,bgcolor: 'background.paper' }}>
    <Items/>
    <Divider variant="inset" component="li" />
    </List>
    </Box>
  );
}