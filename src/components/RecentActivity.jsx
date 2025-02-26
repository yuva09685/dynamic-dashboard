// src/components/RecentActivity.jsx
import React from 'react';
import { Paper, Typography, List, ListItem, ListItemText, Divider } from '@mui/material';
import { motion } from 'framer-motion';

const RecentActivity = () => {
  const activities = [
    'Logged in from IP 192.168.1.1',
    'Updated profile information',
    'Uploaded a new file',
    'Commented on a post',
  ];

  return (
    <motion.div whileHover={{ scale: 1.02 }} transition={{ duration: 0.3 }}>
      <Paper elevation={4} sx={{ p: 3, borderRadius: 2 }}>
        <Typography variant="h6" gutterBottom>
          Recent Activity
        </Typography>
        <Divider sx={{ mb: 2 }} />
        <List disablePadding>
          {activities.map((activity, index) => (
            <ListItem key={index} sx={{ py: 0.5, px: 0 }}>
              <ListItemText primary={activity} />
            </ListItem>
          ))}
        </List>
      </Paper>
    </motion.div>
  );
};

export default RecentActivity;
