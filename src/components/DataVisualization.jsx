import React from 'react';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';

function DataVisualization() {
    return (
        <Paper sx={{ padding: 2, margin: 2 }}>
            <Typography variant="h5">Data Visualization</Typography>
            <div style={{ width: '300px', height: '200px', backgroundColor: '#f9f9f9', border: '1px solid #eee' }}>
            </div>
        </Paper>
    );
}

export default DataVisualization;