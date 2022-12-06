import React, { useState } from 'react';
import { makeStyles } from '@mui/styles';
import { Box, Typography, Button } from '@mui/material';
import { MenuAppBar } from '../components';
import { useNavigate } from 'react-router-dom';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { twitter, google, facebook } from '../imgs';

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
  },
  addButton: {
    background: 'linear-gradient(90deg, #de7c7c 1%, #de7c7c 91%)',
    borderRadius: 80,
    color: '#fff',
    fontWeight: 'normal',
    width: 338,
    height: 65.5
  },
  addText: {
    top: 2,
    fontSize: 30,
    fontWeight: 'bold',
    position: 'relative'
  }
}));

const Login = () => {
  const classes = useStyles();
  const navigate = useNavigate();
  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');

  return (
    <Box
      sx={{
        paddingTop: '1.5rem',
        width: '100%'
      }}
    >
      <MenuAppBar isLogin={true} />
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          margin: '0 auto'
        }}
      >
        <Box
          style={{
            background: '#d9d9d9',
            width: 500,
            height: 600,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'column'
          }}
        >
          <Box
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexDirection: 'column',
              position: 'relative',
              top: -30
            }}
          >
            <FormControl variant="standard" style={{ width: 400, height: 100 }}>
              <InputLabel
                htmlFor="input-with-icon-adornment"
                style={{ width: 400, fontSize: 25 }}
              >
                Nome
              </InputLabel>
              <Box pb={4} />
              <Input
                onChange={(e) => setUser(e.target.value)}
                id="input-with-icon-adornment"
                placeholder="Digite seu nome"
                startAdornment={
                  <InputAdornment position="start">
                    <AccountCircleOutlinedIcon />
                  </InputAdornment>
                }
              />
            </FormControl>
            <FormControl variant="standard" style={{ width: 400, height: 100 }}>
              <InputLabel
                htmlFor="input-with-icon-adornment"
                style={{ width: 400, fontSize: 25 }}
              >
                Senha
              </InputLabel>
              <Box pb={4} />
              <Input
                id="input-with-icon-adornment"
                placeholder="Digite sua senha"
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                startAdornment={
                  <InputAdornment position="start">
                    <LockOutlinedIcon />
                  </InputAdornment>
                }
                label="teste"
              />
              <Box
                pt={0.3}
                style={{
                  display: 'flex',
                  alignItems: 'flex-end',
                  justifyContent: 'flex-end',
                  color: '#000'
                }}
              >
                Esqueceu sua senha?
              </Box>
            </FormControl>
          </Box>
          <Button
            disabled={user === 'aluno' && password === 'aluno' ? false : true}
            variant="contained"
            className={classes.addButton}
            style={
              user === 'aluno' && password === 'aluno'
                ? { borderRadius: 50 }
                : {
                    borderRadius: 50,
                    background: 'linear-gradient(90deg, #ccc 1%, #ccc 91%)'
                  }
            }
            onClick={() => navigate('/quiz')}
          >
            <Typography className={classes.addText}>ENTRAR</Typography>
          </Button>
          <Box pt={2.5} style={{ color: '#000' }}>
            Ou entre com
          </Box>
          <Box display="flex" pt={3}>
            <Box pr={3}>
              <img src={facebook} alt="facebook" />
            </Box>
            <Box>
              <img src={google} alt="google" />
            </Box>
            <Box pl={3}>
              <img src={twitter} alt="twitter" />
            </Box>
          </Box>
          <Box
            style={{
              fontSize: 26,
              color: '#5D34B2',
              position: 'relative',
              top: 30
            }}
          >
            Não possui conta? Crie agora!
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Login;
