// src/components/PerformanceSummary.jsx
import React from 'react';
import { Paper, Typography, Divider, Box, Grid } from '@mui/material';
import { motion } from 'framer-motion';

const PerformanceSummary = () => {
  // Dummy metrics
  const metrics = [
    { label: 'Revenue', value: '$12,000' },
    { label: 'Cost', value: '$3,500' },
    { label: 'Profit', value: '$8,500' },
  ];

  return (
    <motion.div whileHover={{ scale: 1.02 }} transition={{ duration: 0.3 }}>
      <Paper elevation={4} sx={{ p: 3, borderRadius: 2 }}>
        <Typography variant="h6" gutterBottom>
          Performance Summary
        </Typography>
        <Divider sx={{ mb: 2 }} />
        <Grid container spacing={2}>
          {metrics.map((metric, index) => (
            <Grid item xs={12} sm={4} key={index}>
              <Box textAlign="center">
                <Typography variant="subtitle2" color="textSecondary">
                  {metric.label}
                </Typography>
                <Typography variant="h5">{metric.value}</Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Paper>
    </motion.div>
  );
};

export default PerformanceSummary;
