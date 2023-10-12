import { useSelector } from 'react-redux';

import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline, StyledEngineProvider } from '@mui/material';

// routing
import Routes from 'routes';

// defaultTheme
import themes from 'themes';

// project imports
import NavigationScroll from 'layout/NavigationScroll';

import { ModalProvider } from './context/modalContext';
import CreateUserModal from './ui-component/modal/modal';

// ==============================|| APP ||============================== //

const App = () => {
  const customization = useSelector((state) => state.customization);

  return (
    <ModalProvider>
      <StyledEngineProvider injectFirst>
        <ThemeProvider theme={themes(customization)}>
          <CssBaseline />
          <NavigationScroll>
            <CreateUserModal />
            <Routes />
          </NavigationScroll>
        </ThemeProvider>
      </StyledEngineProvider>
    </ModalProvider>
  );
};

export default App;
