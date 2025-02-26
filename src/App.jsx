// src/App.jsx
import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, Box, Button, Container } from '@mui/material';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import Sidebar from './components/Sidebar';
import StatsGroup from './components/StatsGroup';
import RevenueChart from './components/RevenueChart';
import UsersTable from './components/UsersTable';
import WelcomeCard from './components/welcomeCard';

const App = () => {
  // Define your dashboard widgets as an ordered list.
  const [widgets, setWidgets] = useState([
    { id: 'stats', component: <StatsGroup /> },
    { id: 'revenue', component: <RevenueChart /> },
    { id: 'users', component: <UsersTable /> },
  ]);

  const onDragEnd = (result) => {
    if (!result.destination) return;
    const newWidgets = Array.from(widgets);
    const [removed] = newWidgets.splice(result.source.index, 1);
    newWidgets.splice(result.destination.index, 0, removed);
    setWidgets(newWidgets);
  };

  return (
    <Box>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            Dashboard
          </Typography>
          <Button color="inherit">Profile</Button>
        </Toolbar>
      </AppBar>
      <Container sx={{ my: 4 }}>
        <Box display="flex" flexDirection={{ xs: 'column', sm: 'row' }} gap={2}>
          <Sidebar />
          <Box flexGrow={1}>
            {/* Display the Welcome Card */}
            <WelcomeCard />
            {/* Draggable Widgets */}
            <DragDropContext onDragEnd={onDragEnd}>
              <Droppable droppableId="dashboard-widgets">
                {(provided) => (
                  <Box
                    ref={provided.innerRef}
                    {...provided.droppableProps}
                    display="flex"
                    flexDirection="column"
                    gap={2}
                  >
                    {widgets.map((widget, index) => (
                      <Draggable key={widget.id} draggableId={widget.id} index={index}>
                        {(provided) => (
                          <Box
                            ref={provided.innerRef}
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                          >
                            {widget.component}
                          </Box>
                        )}
                      </Draggable>
                    ))}
                    {provided.placeholder}
                  </Box>
                )}
              </Droppable>
            </DragDropContext>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default App;
