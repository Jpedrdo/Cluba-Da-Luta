import React from 'react';
import { AppBar, Box, Toolbar, Typography, Button } from '@mui/material';
import { gloves, knowMore, login } from '../imgs';
import { makeStyles } from '@mui/styles';
import { useNavigate } from 'react-router-dom';

const useStyles = makeStyles(() => ({
  logoCircle: {
    boxSizing: 'border-box',
    background: '#D9D9D9',
    border: '5px solid #000000',
    width: '80px',
    height: '80px',
    borderRadius: '50%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  glovesImg: {
    position: 'relative',
    top: -6
  },
  title: {
    color: '#fff'
  }
}));

const MenuAppBar = ({ isLogin }) => {
  const classes = useStyles();
  const navigate = useNavigate();

  return (
    <Box sx={{ flexGrow: 1, background: 'transparent' }}>
      <AppBar
        position="static"
        sx={{ background: 'transparent', boxShadow: 'none' }}
      >
        <Toolbar>
          <Box
            display="flex"
            flexDirection="row"
            alignItems="center"
            sx={{ flexGrow: 0.8 }}
          >
            <Box className={classes.logoCircle}>
              <img
                src={gloves}
                alt="gloves"
                width={65}
                className={classes.glovesImg}
              />
            </Box>
            <Typography
              className={classes.title}
              sx={{ fontSize: 25, paddingLeft: 1 }}
            >
              Clube da Luta
            </Typography>
          </Box>
          {!isLogin && (
            <Box display="flex">
              <Box
                display="flex"
                alignItems="center"
                position="relative"
                left={-20}
              >
                <Typography
                  className={classes.title}
                  sx={{
                    fontSize: 25,
                    paddingLeft: 1,
                    fontWeight: 'bold',
                    paddingRight: 1
                  }}
                >
                  Saiba Mais
                </Typography>
                <img src={knowMore} alt="knowMore" width={15} height={15} />
              </Box>
              <Button
                style={{ textTransform: 'none', padding: 0, margin: 0 }}
                onClick={() => navigate('/login')}
              >
                <Box display="flex" alignItems="center" position="relative">
                  <Typography
                    className={classes.title}
                    sx={{
                      fontSize: 25,
                      paddingLeft: 1,
                      fontWeight: 'bold',
                      paddingRight: 1
                    }}
                  >
                    Entrar
                  </Typography>
                  <img src={login} alt="login" width={15} height={15} />
                </Box>
              </Button>
            </Box>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default MenuAppBar;
