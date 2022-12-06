import React from 'react';
import { Box } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { Outlet } from 'react-router-dom';

const useStyles = makeStyles(() => ({
  root: {
    height: '100%',
    width: '100%',
    margin: '0 auto'
  }
}));

const MainLayout = () => {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <Outlet />
    </Box>
  );
};

export default MainLayout;
