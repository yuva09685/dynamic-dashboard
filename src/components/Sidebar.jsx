import React from 'react';
import {
  Paper,
  Box,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
  Divider,
} from '@mui/material';
import InboxIcon from '@mui/icons-material/Inbox';
import MailIcon from '@mui/icons-material/Mail';

const Sidebar = () => {
  return (
    <Paper elevation={3} sx={{ width: 240, p: 2, mr: 2 }}>
      <Typography variant="h6" gutterBottom>
        Menu
      </Typography>
      {/* Nested card for the menu */}
      <Paper variant="outlined" sx={{ p: 1, mb: 2 }}>
        <Divider />
        <List>
          {['Dashboard', 'Users', 'Reports', 'Settings'].map((text, index) => (
            <ListItem
              key={text}
              sx={{ mb: 1 }}
              component={Paper}
              variant="outlined"
            >
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
      </Paper>
    </Paper>
  );
};

export default Sidebar;
