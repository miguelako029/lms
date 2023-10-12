import React from 'react';
import { Button } from '@mui/material';
import UserTable from './userTable';
import AddIcon from '@mui/icons-material/Add';
import { useModal } from '../../../context/modalContext';

const StudentManagement = () => {
  const { openCreateUserModal } = useModal();
  const users = [
    { id: 1, name: 'User 1', email: 'user1@example.com' },
    { id: 2, name: 'User 2', email: 'user2@example.com' },
    { id: 3, name: 'User 3', email: 'user3@example.com' }
  ];

  // const { dispatch } = useModal();

  // const openAddModal = () => {
  //   dispatch({ type: OPEN_ADD_MODAL });
  // };

  return (
    <div style={{ justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <h2>User List</h2>
      <Button variant="contained" sx={{ marginBottom: 5, marginTop: 4, fontSize: 17 }} onClick={openCreateUserModal}>
        <AddIcon sx={{ fontSize: 16, marginRight: 1 }} />
        New User
      </Button>
      <UserTable users={users} />
    </div>
  );
};

export default StudentManagement;
