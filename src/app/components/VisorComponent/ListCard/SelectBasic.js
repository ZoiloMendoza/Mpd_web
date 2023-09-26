import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Typography from '@mui/material/Typography';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
export default function BasicSelect() {
  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <Box sx={{ width: '100%', display: 'flex', justifyContent: 'space-between', alignItems:'center',gap:'50px' }}>
      <FormControl sx={{ flex:'1'}}>
        <InputLabel id="demo-simple-select-label">Proceso</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          label="Age"
          onChange={handleChange}
        >
          <MenuItem value={10}>Todos</MenuItem>
          <MenuItem value={20}>Urgente</MenuItem>
          <MenuItem value={30}>Normal</MenuItem>
        </Select>
      </FormControl>
      <Box sx={{ flex:'1', display:'flex', alignItems:'stretch', justifyContent: 'flex-end'}}>
      <Typography variant="h6" gutterBottom nowrap>
        25 Sep
      </Typography>
      <CalendarMonthIcon/>
      </Box>
    </Box>
  );
}