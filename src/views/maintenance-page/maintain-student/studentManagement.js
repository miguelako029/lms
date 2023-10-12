import React from 'react';
import { Button } from '@mui/material';
import UserTable from './userTable';
import AddIcon from '@mui/icons-material/Add';
import { useModal, OPEN_ADD_MODAL } from '../../../context/modalContext'; // Import OPEN_ADD_MODAL

const StudentManagement = () => {
  const users = [
    { id: 1, name: 'User 1', email: 'user1@example.com' },
    { id: 2, name: 'User 2', email: 'user2@example.com' },
    { id: 3, name: 'User 3', email: 'user3@example.com' }
    // Add more users here
  ];

  const { dispatch } = useModal();

  const openAddModal = () => {
    dispatch({ type: OPEN_ADD_MODAL });
  };

  return (
    <div style={{ justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <h2>User List</h2>

      <Button variant="contained" sx={{ marginBottom: 5, marginTop: 4, fontSize: 17 }}>
        <AddIcon sx={{ fontSize: 16, marginRight: 1 }} />
        New User
      </Button>

      <UserTable users={users} />

      <Button variant="contained" onClick={openAddModal}>
        <AddIcon />
        Add Item
      </Button>
    </div>
  );
};

export default StudentManagement;
