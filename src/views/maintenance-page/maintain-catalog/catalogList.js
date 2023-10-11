// import { Link } from 'react-router-dom';
// import { useDispatch, useSelector } from 'react-redux';

// material-ui
// import { ButtonBase } from '@mui/material';

// project imports
// import config from 'config';
// import Logo from 'ui-component/Logo';
// import { MENU_OPEN } from 'store/actions';

import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';

// ==============================|| MAIN LOGO ||============================== //

const studentManagement = () => {
  //   const defaultId = useSelector((state) => state.customization.defaultId);
  //   const dispatch = useDispatch();

  const users = [
    { id: 1, name: 'Catalog 1', desc: 'Description 1' },
    { id: 2, name: 'Catalog 1', desc: 'Description 2' },
    { id: 3, name: 'Catalog 1', desc: 'Description 3' }
    // Add more users here
  ];

  return (
    // <ButtonBase disableRipple onClick={() => dispatch({ type: MENU_OPEN, id: defaultId })} component={Link} to={config.defaultPath}>

    <div>
      <h2>User List</h2>

      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Description</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users.map((user) => (
              <TableRow key={user.id}>
                <TableCell>{user.id}</TableCell>
                <TableCell>{user.name}</TableCell>
                <TableCell>{user.desc}</TableCell>
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
