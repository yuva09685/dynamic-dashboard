// UsersTable.js
import React from 'react';
import { Paper, Typography, Box } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';

const UsersTable = () => {
  const columns = [
    { field: 'id', headerName: 'ID', width: 90 },
    { field: 'name', headerName: 'Name', width: 150 },
    { field: 'email', headerName: 'Email', width: 200 },
  ];

  const rows = [
    { id: 1, name: 'John Doe', email: 'john@example.com' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com' },
    { id: 3, name: 'Alice Brown', email: 'alice@example.com' },
  ];

  return (
    <Paper elevation={3} sx={{ p: 2, height: 300 }}>
      <Typography variant="h6" sx={{ mb: 2 }}>
        Users
      </Typography>
      <Box sx={{ height: '100%' }}>
        <DataGrid
          rows={rows}
          columns={columns}
          pageSize={3}
          rowsPerPageOptions={[3]}
          disableSelectionOnClick
        />
      </Box>
    </Paper>
  );
};

export default UsersTable;
