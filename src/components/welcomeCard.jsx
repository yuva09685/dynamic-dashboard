// src/components/WelcomeCard.jsx
import React from 'react';
import { Paper, Typography, Box } from '@mui/material';
import { motion } from 'framer-motion';

const WelcomeCard = () => {
  return (
    <motion.div whileHover={{ scale: 1.02 }} transition={{ duration: 0.3 }}>
      <Paper elevation={4} sx={{ p: 3, borderRadius: 2, mb: 2 }}>
        <Box textAlign="center">
          <Typography variant="h5">Welcome, yuvi!</Typography>
          <Typography variant="body1" color="textSecondary">
            Here’s a quick overview of your dashboard for today.
          </Typography>
        </Box>
      </Paper>
    </motion.div>
  );
};

export default WelcomeCard;
