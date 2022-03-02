import * as React from 'react';
import TextField from '@mui/material/TextField';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DateTimePicker from '@mui/lab/DateTimePicker';
import MobileDateTimePicker from '@mui/lab/MobileDateTimePicker';
import DesktopDateTimePicker from '@mui/lab/DesktopDateTimePicker';
import Stack from '@mui/material/Stack';

export default function ResponsiveDateTimePickers() {
  const [value, setValue] = React.useState(new Date('2018-01-01T00:00:00.000Z'));

  return (
      
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <Stack spacing={3}>
        
        <DesktopDateTimePicker
          value={value}
          onChange={(newValue) => {
            setValue(newValue);
          }}
          renderInput={(params) => <TextField {...params} />}
        />
        
      </Stack>
    </LocalizationProvider>
  );
}

