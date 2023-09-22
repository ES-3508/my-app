import * as React from 'react';
import Button from '@mui/material/Button';

export default function DisableElevation(props) {
  return (
    <Button variant="contained" disableElevation href={props.link}>
      {props.text}
    </Button>
  );
}