import React, { useState } from 'react';
import { makeStyles } from '@mui/styles';
import { Box, Typography, Button } from '@mui/material';
import {
  criation,
  notfy,
  quiz,
  list,
  groups,
  profile,
  progress
} from '../imgs';
import { useNavigate } from 'react-router-dom';
import { Dashboard, Questions, Answered, MenuAppBar } from '../components';

const infosList = [
  {
    text: 'Meu perfil',
    img: profile,
    value: 0,
    disabled: true
  },
  {
    text: 'Veja seu progresso!',
    img: progress,
    value: 1
  },
  {
    text: 'Minhas questões favoritas',
    img: list,
    value: 2
  },
  {
    text: 'Grupos',
    img: groups,
    disabled: true,
    value: 3
  },
  {
    text: 'Noticações!',
    img: notfy,
    disabled: true,
    value: 4
  },
  {
    text: 'Area de criação',
    img: criation,
    disabled: true,
    value: 5
  },
  {
    text: 'Banco de questões',
    img: quiz,
    value: 6
  }
];

const useStyles = makeStyles((theme) => ({
  mainBox: {
    display: 'flex',
    height: '90vh',
    minHeight: '750px',
    alignItems: 'center',
    justifyContent: 'center',
    [theme.breakpoints.down('sm')]: {
      marginTop: '-1.1rem'
    }
  },
  mainBox2: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    [theme.breakpoints.down('sm')]: {
      marginTop: '-1.1rem'
    }
  },
  infos: {
    display: 'flex',
    flexDirection: 'column',
    width: '30%',
    minWidth: '30%',
    [theme.breakpoints.down('md')]: {
      marginTop: '1rem',
      width: '80%'
    },
    textAlign: 'center'
  },
  infos2: {
    display: 'flex',
    flexDirection: 'column',
    [theme.breakpoints.down('md')]: {
      marginTop: '1rem',
      width: '400px'
    },
    height: '590px',
    background: '#787878',
    borderRadius: '20px',
    width: '400px',
    padding: 40
  },
  makeLogin: {
    position: 'relative',
    display: 'flex',
    width: '58%',
    [theme.breakpoints.down('md')]: {
      marginTop: '4rem',
      width: '80%'
    },
    [theme.breakpoints.down('sm')]: {
      marginTop: '0',
      width: '80%'
    },
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column'
  },
  learnIt: {
    position: 'relative',
    display: 'flex',
    width: '47%',
    [theme.breakpoints.down('md')]: {
      marginTop: '4rem',
      width: '71%'
    },
    [theme.breakpoints.down('sm')]: {
      marginTop: '0',
      width: '80%'
    },
    textAlign: 'center',
    alignItems: 'flex-end',
    justifyContent: 'flex-end'
  },
  img: {
    objectFit: 'cover'
  }
}));

const Home = () => {
  const classes = useStyles();
  const navigate = useNavigate();
  const [currentTab, setCurrentTab] = useState(6);

  return (
    <Box
      sx={{
        paddingTop: '1.5rem',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'right',
        backgroundSize: '1000px',
        'background-position-y': '-100px'
      }}
    >
      <MenuAppBar isLogin={true} />
      <Box
        pt={8}
        pb={10}
        className={classes.mainBox2}
        sx={{
          flexDirection: {
            xs: 'column',
            sm: 'column',
            md: 'row'
          }
        }}
      >
        <Box className={classes.infos2} display="flex" flexDirection="column">
          <ul display="flex" flexDirection="column">
            {infosList.map((item, i) => (
              <Box pb={1.5}>
                <Button
                  display="flex"
                  flexDirection="column"
                  style={
                    item.disabled
                      ? { textTransform: 'none', opacity: 0.5 }
                      : { textTransform: 'none' }
                  }
                  onClick={() => setCurrentTab(item.value)}
                  disabled={item.disabled}
                >
                  <Box key={i} display="flex" alignItems="center">
                    <img src={item.img} alt="infosList" />
                    <Typography
                      sx={{
                        color:
                          currentTab === item.value
                            ? '#3db4da'
                            : item.disabled
                            ? '#ccc'
                            : '#fff',
                        fontSize:
                          item.value === 2 && currentTab === item.value
                            ? '21px'
                            : '22px',
                        paddingLeft: 2,
                        width: '100%',
                        fontWeight:
                          currentTab === item.value ? 'bold' : 'normal'
                      }}
                    >
                      {item.text}
                    </Typography>
                  </Box>
                </Button>
              </Box>
            ))}
          </ul>
        </Box>
        <Box className={classes.makeLogin}>
          <Box
            style={
              currentTab === 1
                ? {
                    display: 'flex',
                    flexDirection: 'column',
                    height: '590px',
                    borderRadius: '20px',
                    width: '90%',
                    padding: 40,
                    background: '#bdefff',
                    justifyContent: 'center'
                  }
                : {
                    display: 'flex',
                    flexDirection: 'column',
                    height: '590px',
                    borderRadius: '20px',
                    width: '90%',
                    padding: 40,
                    background: '#bdefff',
                    justifyContent: 'center'
                  }
            }
          >
            {currentTab === 1 ? <Dashboard /> : null}
            {currentTab === 2 ? <Answered /> : null}
            {currentTab === 6 ? <Questions /> : null}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Home;
