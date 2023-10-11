// import { Link } from 'react-router-dom';
// import { useDispatch, useSelector } from 'react-redux';

// material-ui
// import { ButtonBase } from '@mui/material';

// project imports
// import config from 'config';
// import Logo from 'ui-component/Logo';
// import { MENU_OPEN } from 'store/actions';

import React from 'react';

// import CartTable from '../service-searchBookDashboard/cartTable';

// ==============================|| MAIN LOGO ||============================== //

const bookManagement = () => {
  //   const defaultId = useSelector((state) => state.customization.defaultId);
  //   const dispatch = useDispatch();

  //   const cartItems = [
  //     { name: 'Item 1', price: 10, quantity: 2 },
  //     { name: 'Item 2', price: 15, quantity: 1 },
  //     { name: 'Item 3', price: 5, quantity: 3 }
  //   ];

  return (
    // <ButtonBase disableRipple onClick={() => dispatch({ type: MENU_OPEN, id: defaultId })} component={Link} to={config.defaultPath}>

    <div className="App">
      <h1>Search Books</h1>
      {/* <CartTable cartItems={cartItems} /> */}
    </div>
  );
  // </ButtonBase>
};

export default bookManagement;
