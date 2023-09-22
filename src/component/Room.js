import React from 'react'
import Thermo from '../component/Thermo'
import Bulb from '../component/Bulb'
import Peoples from '../component/Peoples'
import { Link } from '@mui/material'
import {useParams} from 'react-router-dom';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function Room() {
    const params= useParams();
  return (
    <div>
        <h1>{params.id}</h1>
        <Box sx={{ width: '100%' }}>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} >
        <Grid item xs={6}>
          <Item minHeight="100vh">
          <Bulb/>
        
          </Item>
        </Grid>
        <Grid item xs={6}  alignItems="center"justify="center">
        <Item >
          <Thermo/>
        
        </Item>
        </Grid>
        <Grid item xs={6}>
          <Item>
            <Peoples/>
          </Item>
        </Grid>
        
      </Grid>
    </Box>
        

    </div>
    
  )
}
