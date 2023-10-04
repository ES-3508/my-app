import React from 'react';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh', // Adjust this value based on your layout requirements
  },
  button: {
    margin: '10px',
    padding: '20px 40px', // Adjust the padding to increase button size
  },
};

const ButtonComponent = () => {
  return (
    <div style={styles.container}>
      <Button
        component={Link}
        to="/panormic view"
        variant="contained"
        color="primary"
        style={styles.button}
      >
        Panoromic View
      </Button>
      <Button
        component={Link}
        to="/ground floor"
        variant="contained"
        color="primary"
        style={styles.button}
      >
        Ground Floor
      </Button>
      <Button
        component={Link}
        to="/first floor"
        variant="contained"
        color="primary"
        style={styles.button}
      >
        First Floor
      </Button>
      
    </div>
  );
};

export default ButtonComponent;
