// import { Link } from 'react-router-dom';
// import { useDispatch, useSelector } from 'react-redux';

// material-ui
// import { ButtonBase } from '@mui/material';

// project imports
// import config from 'config';
// import Logo from 'ui-component/Logo';
// import { MENU_OPEN } from 'store/actions';

import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button, IconButton } from '@mui/material';

// import { ModeEditOutlineIcon, DeleteIcon } from '@mui/icons-material/';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import AddIcon from '@mui/icons-material/Add';

// ==============================|| MAIN LOGO ||============================== //

const studentManagement = () => {
  //   const defaultId = useSelector((state) => state.customization.defaultId);
  //   const dispatch = useDispatch();

  const users = [
    { id: 1, name: 'User 1', email: 'user1@example.com' },
    { id: 2, name: 'User 2', email: 'user2@example.com' },
    { id: 3, name: 'User 3', email: 'user3@example.com' }
    // Add more users here
  ];

  return (
    // <ButtonBase disableRipple onClick={() => dispatch({ type: MENU_OPEN, id: defaultId })} component={Link} to={config.defaultPath}>

    <div style={{ justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <h2>User List</h2>

      <Button variant="contained" sx={{ marginBottom: 5, marginTop: 4, fontSize: 17 }}>
        <AddIcon sx={{ fontSize: 16, marginRight: 1 }} />
        New User
      </Button>

      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Email</TableCell>
              <TableCell align="right">Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users.map((user) => (
              <TableRow key={user.id}>
                <TableCell>{user.id}</TableCell>
                <TableCell>{user.name}</TableCell>
                <TableCell>{user.email}</TableCell>
                <TableCell align="right">
                  <IconButton aria-label="edit" color="primary">
                    <EditIcon />
                  </IconButton>
                  <IconButton aria-label="delete" color="primary">
                    <DeleteIcon />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
    // </ButtonBase>
  );
};

export default studentManagement;
