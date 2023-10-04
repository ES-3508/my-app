import React from 'react';
import { Grid, Paper, Typography } from '@mui/material';

const Data = ({ temperature, humidity, isMotionDetected, area, lightIntensity,Voc, CO2,device1,device2,gas,flame }) => {
  const hasRequiredProps = temperature !== undefined && humidity !== undefined && isMotionDetected !== undefined ;

  return (
    <div>
      <h1>{area}</h1>
      <Grid container spacing={2}>
        
        <Grid item xs={4}>
          {hasRequiredProps && (
            <Paper elevation={4} style={{ padding: '20px' }}>
              <Typography variant="h6">Temperature</Typography>
              <Typography style={{ color: 'lightgreen' }} variant="h4">
                {temperature === 404 ? 'error' : `${temperature} °C`}
              </Typography>
            </Paper>
          )}
        </Grid>
        
        <Grid item xs={4}>
          {hasRequiredProps && (
            <Paper elevation={4} style={{ padding: '20px' }}>
              <Typography variant="h6">Humidity</Typography>
              <Typography style={{ color: 'lightgreen' }} variant="h4">
                {humidity === 404 ? 'error' : `${humidity} %`}
              </Typography>
            </Paper>
          )}
        </Grid>
        {hasRequiredProps && (
          <Grid item xs={4}>
            <Paper elevation={4} style={{ padding: '20px' }}>
              <Typography variant="h6">Motion Detected</Typography>
              <Typography variant="h4" style={{ color: 'lightgreen' }}>
                {isMotionDetected ? 'Yes' : 'No'}
              </Typography>
            </Paper>
          </Grid>
        )}
        {hasRequiredProps && lightIntensity !== undefined && (
          <Grid item xs={4}>
            <Paper elevation={4} style={{ padding: '20px' }}>
              <Typography variant="h6">Light Intensity</Typography>
              <Typography style={{ color: 'lightgreen' }} variant="h4">
                {lightIntensity} lux
              </Typography>
            </Paper>
          </Grid>
        )}
        
          {Voc && (
            <Grid item xs={4}>
            <Paper elevation={4} style={{ padding: '20px' }}>
              <Typography variant="h6">VOC</Typography>
              <Typography style={{ color: 'lightgreen' }} variant="h4">
                {temperature === 404 ? 'error' : `${Voc} PPM`}
              </Typography>
            </Paper>
            </Grid>
          )}
        
        
          {CO2 && (
            <Grid item xs={4}>
            <Paper elevation={4} style={{ padding: '20px' }}>
              <Typography variant="h6">CO2</Typography>
              <Typography style={{ color: 'lightgreen' }} variant="h4">
                {temperature === 404 ? 'error' : `${CO2} PPM`}
              </Typography>
            </Paper>
            </Grid>
          )}
        
        
          {device1 && (
            <Grid item xs={4}>
              <Paper elevation={4} style={{ padding: '20px' }}>
                <Typography variant="h6">Device 1</Typography>
                <Typography style={{ color: 'lightgreen' }} variant="h4">
                  {device1 === 0 ? 'ON' : `OFF `}
                </Typography>
              </Paper>
            </Grid>
          )}
          {device2 && (
            <Grid item xs={4}>
              <Paper elevation={4} style={{ padding: '20px' }}>
                <Typography variant="h6">Device 2</Typography>
                <Typography style={{ color: 'lightgreen' }} variant="h4">
                  {device2 ===0  ? 'ON' : `OFF `}
                </Typography>
              </Paper>
            </Grid>
          )}
          {gas && (
            <Grid item xs={4}>
              <Paper elevation={4} style={{ padding: '20px' }}>
                <Typography variant="h6">Gas</Typography>
                <Typography style={{ color: 'lightgreen' }} variant="h4">
                  {device2 ===0  ? 'No' : `yes `}
                </Typography>
              </Paper>
            </Grid>
          )}
          {flame && (
            <Grid item xs={4}>
              <Paper elevation={4} style={{ padding: '20px' }}>
                <Typography variant="h6">Flame</Typography>
                <Typography style={{ color: 'lightgreen' }} variant="h4">
                  {device2 ===0  ? 'No' : `yes `}
                </Typography>
              </Paper>
            </Grid>
          )}
        
      </Grid>
    </div>
  );
};

export default Data;
