// RevenueChart.js
import React from 'react';
import { Paper, Typography, Box } from '@mui/material';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(BarElement, CategoryScale, LinearScale, Title, Tooltip, Legend);

const RevenueChart = () => {
  const chartData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
    datasets: [
      {
        label: 'Revenue',
        data: [100, 200, 300, 250, 400],
        backgroundColor: '#3f51b5',
      },
    ],
  };

  return (
    <Paper elevation={3} sx={{ p: 2 }}>
      <Typography variant="h6" sx={{ mb: 2 }}>
        Revenue
      </Typography>
      <Box sx={{ height: 300 }}>
        <Bar data={chartData} options={{ maintainAspectRatio: false }} />
      </Box>
    </Paper>
  );
};

export default RevenueChart;
