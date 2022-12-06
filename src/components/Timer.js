import React, { useEffect } from 'react';
import { Box, Typography } from '@mui/material';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import { useTimer } from 'react-timer-hook';
import { expiryTimeQuestion } from '../utils';

const Timer = ({ onTimeExpire, stopTime }) => {
  const { seconds, minutes, pause, restart } = useTimer({
    expiryTimestamp: expiryTimeQuestion(new Date()),
    onExpire: onTimeExpire
  });

  useEffect(() => {
    stopTime ? pause() : restart(expiryTimeQuestion(new Date()));
  }, [stopTime]);

  return (
    <Box
      pl={1}
      display="flex"
      flexDirection="row"
      alignItems="center"
      sx={{ opacity: stopTime ? 0.5 : 1 }}
    >
      <AccessTimeIcon fontSize="small" style={{ color: '#000' }} />
      <Box pt={0.03} pl={0.5}>
        <Typography component="span" style={{ color: '#000' }}>
          {minutes}
        </Typography>
        <span style={{ color: '#000' }}>:</span>
        <Typography component="span" style={{ color: '#000' }}>
          {String(seconds).padStart(2, '0')}
        </Typography>
      </Box>
    </Box>
  );
};

export default Timer;
