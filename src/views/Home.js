import React from 'react';
import { makeStyles } from '@mui/styles';
import { Box, Typography, Button } from '@mui/material';
import { MenuAppBar, Slide } from '../components';
import { triangle, list1, list2, list3, list4, list5 } from '../imgs';
import { useNavigate } from 'react-router-dom';

const infosList = [
  {
    text: 'Mais de 10.000 questões',
    img: list1
  },
  {
    text: 'Crie e publique suas próprias questões!',
    img: list2
  },
  {
    text: 'Responde questões e ascenda no ranking',
    img: list3
  },
  {
    text: 'Crie seu grupo e lutem em conjunto!',
    img: list4
  },
  {
    text: 'Desafia usuários para uma batalha intelectual!',
    img: list5
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
      width: '80%'
    },
    height: '683px',
    background: '#E6E2FF',
    borderRadius: '20px',
    width: '700px',
    padding: 40
  },
  makeLogin: {
    position: 'relative',
    display: 'flex',
    width: '40%',
    [theme.breakpoints.down('md')]: {
      marginTop: '4rem',
      width: '71%'
    },
    [theme.breakpoints.down('sm')]: {
      marginTop: '0',
      width: '80%'
    },
    [theme.breakpoints.down('lg')]: {
      marginBottom: 30
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

  return (
    <Box
      sx={{
        paddingTop: '1.5rem',
        backgroundImage: `url(${triangle})`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'right',
        backgroundSize: '1000px',
        'background-position-y': '-100px'
      }}
    >
      <MenuAppBar />
      <Box
        className={classes.mainBox}
        sx={{
          flexDirection: {
            xs: 'column-reverse',
            sm: 'column-reverse',
            md: 'row'
          }
        }}
      >
        <Box className={classes.infos}>
          <Box pb={1}>
            <Typography
              sx={{
                fontSize: {
                  xs: '1.2rem',
                  sm: '1.2rem',
                  md: '1.2vw'
                }
              }}
            >
              Conheça nossa plataforma!
            </Typography>
          </Box>
          <Slide />
        </Box>
        <Box className={classes.learnIt}>
          <Typography
            sx={{
              color: '#000',
              fontWeight: 'bold',
              fontSize: 40,
              position: 'relative',
              top: 13
            }}
          >
            Aprenda para lutar !
          </Typography>
        </Box>
      </Box>
      <Box
        sx={{
          display: 'flex',
          margin: '0 auto',
          width: '100%',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        <Typography sx={{ fontSize: '50px', lineHeight: '75px' }}>
          Uma nova maneira de aprender!
        </Typography>
      </Box>
      <Box
        pt={8}
        pb={10}
        className={classes.mainBox2}
        sx={{
          flexDirection: {
            xs: 'column-reverse',
            sm: 'column-reverse',
            md: 'column-reverse',
            lg: 'row'
          }
        }}
      >
        <Box className={classes.infos2}>
          <ul>
            {infosList.map((item, i) => (
              <Box key={i} display="flex" alignItems="center" pb={3}>
                <img src={item.img} alt="infosList" />
                <Typography
                  sx={{ color: '#000', fontSize: '22px', paddingLeft: 2 }}
                >
                  {item.text}
                </Typography>
              </Box>
            ))}
          </ul>
        </Box>
        <Box className={classes.makeLogin}>
          <Typography
            sx={{
              fontSize: '26px',
              position: 'relative',
              top: -10
            }}
          >
            Gostou? Comece a lutar agora mesmo!
          </Typography>
          <Button
            variant="contained"
            sx={{
              background: '#14F761',
              width: 400,
              height: 90,
              textTransform: 'none',
              borderRadius: '20px'
            }}
            onClick={() => navigate('/login')}
          >
            <Typography
              sx={{ color: '#000', fontSize: '44px', lineHeight: '66px' }}
            >
              Faça seu cadastro!
            </Typography>
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default Home;
