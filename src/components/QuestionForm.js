import React, { useEffect } from 'react';
import {
  Box,
  Typography,
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl
} from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CancelIcon from '@mui/icons-material/Cancel';
import Timer from '../components/Timer';

const QuestionForm = ({
  currentId,
  currentQuestion,
  result,
  handleResult,
  answer,
  handleChangeRadio
}) => {
  const { question, text, answers } = currentQuestion;
  const { submited, error, text: resultText, color } = result;

  useEffect(() => {
    window.addEventListener('beforeunload', (event) => {
      event.preventDefault();
      event.returnValue = '';
    });
  }, []);

  return (
    <Box p={4.5}>
      <Box display="flex" flexDirection="row">
        <Typography
          variant="h6"
          style={{ color: '#000', fontSize: '21px', fontWeight: 'bold' }}
        >{`${currentId}) ${question}`}</Typography>
      </Box>
      {text && (
        <Box pt={1}>
          <Typography sx={{ color: '#000', fontSize: '1.2vw' }}>
            {text}
          </Typography>
        </Box>
      )}
      <Box pt={2}>
        <FormControl>
          <Box display="flex" flexDirection="row" alignItems="center">
            <Typography
              id="radio-buttons-group-label"
              color="secondary"
              style={{ color: '#222' }}
            >
              Respostas
            </Typography>
            <Timer
              onTimeExpire={() => handleResult('Tempo expirado', true)}
              stopTime={submited}
            />
          </Box>
          <RadioGroup
            aria-labelledby="radio-buttons-group-label"
            name="row-radio-buttons-group"
            value={answer}
            onChange={handleChangeRadio}
          >
            {answers.map((answ, index) => (
              <Box key={answ} pt={1} pb={0.5}>
                <FormControlLabel
                  value={index}
                  disabled={submited}
                  control={
                    <Radio sx={{ padding: '0px 10px' }} color="secondary" />
                  }
                  label={
                    <Typography style={{ color: '#000' }}>{answ}</Typography>
                  }
                />
              </Box>
            ))}
          </RadioGroup>
        </FormControl>
        {submited && (
          <Box display="flex" pt={2}>
            {error ? (
              <CancelIcon sx={{ color: color }} />
            ) : (
              <CheckCircleIcon sx={{ color: color }} />
            )}
            <Typography
              sx={{
                color: color,
                padding: '0px 10px'
              }}
            >
              {resultText}
            </Typography>
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default QuestionForm;
