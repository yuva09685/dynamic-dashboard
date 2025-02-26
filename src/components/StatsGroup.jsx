// src/components/StatsGroup.jsx
import React from 'react';
import { Stack } from '@mui/material';
import StatsCard from './StatsCard';

const StatsGroup = () => {
  return (
    <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
      <StatsCard title="Total Users" value={150} />
      <StatsCard title="Active Users" value={85} />
      <StatsCard title="New Signups" value={20} />
    </Stack>
  );
};

export default StatsGroup;
