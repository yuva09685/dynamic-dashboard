// StatsCard.js
import React from 'react';
import { Paper, Typography, Box } from '@mui/material';

const StatsCard = ({ title, value }) => {
  return (
    <Paper elevation={3} sx={{ p: 2, flex: 1 }}>
      <Box sx={{ textAlign: 'center' }}>
        <Typography variant="h6">{title}</Typography>
        <Typography variant="h4">{value}</Typography>
      </Box>
    </Paper>
  );
};

export default StatsCard;
