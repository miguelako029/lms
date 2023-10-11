import { lazy } from 'react';

// project imports
import MainLayout from 'layout/MainLayout';
import Loadable from 'ui-component/Loadable';

// dashboard routing
const DashboardDefault = Loadable(lazy(() => import('views/dashboard/Default')));

// utilities routing
const UtilsTypography = Loadable(lazy(() => import('views/utilities/Typography')));
const UtilsColor = Loadable(lazy(() => import('views/utilities/Color')));
const UtilsShadow = Loadable(lazy(() => import('views/utilities/Shadow')));
const UtilsMaterialIcons = Loadable(lazy(() => import('views/utilities/MaterialIcons')));
const UtilsTablerIcons = Loadable(lazy(() => import('views/utilities/TablerIcons')));

const MaintainUser = Loadable(lazy(() => import('views/maintenance-page/maintain-student/studentManagement')));
const MaintainBooks = Loadable(lazy(() => import('views/maintenance-page/maintain-books/bookList')));
const MaintainCatalog = Loadable(lazy(() => import('views/maintenance-page/maintain-catalog/catalogList')));

const ServiceSearchBook = Loadable(lazy(() => import('views/services-page/service-searchBookDashboard/searchBook')));
const ServiceCart = Loadable(lazy(() => import('views/services-page/service-cart/cart')));
const ServiceAdminApproval = Loadable(lazy(() => import('views/services-page/service-cart/cart')));
const ServiceStudentHistory = Loadable(lazy(() => import('views/services-page/service-studentHistory/studentHistory')));
const ServiceAdminHistory = Loadable(lazy(() => import('views/services-page/service-adminHistory/adminHistory')));

// sample page routing
const SamplePage = Loadable(lazy(() => import('views/sample-page')));

// ==============================|| MAIN ROUTING ||============================== //

const MainRoutes = {
  path: '/',
  element: <MainLayout />,
  children: [
    {
      path: '/',
      element: <DashboardDefault />
    },
    {
      path: 'dashboard',
      children: [
        {
          path: 'default',
          element: <DashboardDefault />
        }
      ]
    },
    {
      path: 'utils',
      children: [
        {
          path: 'util-typography',
          element: <UtilsTypography />
        }
      ]
    },
    {
      path: 'utils',
      children: [
        {
          path: 'util-color',
          element: <UtilsColor />
        }
      ]
    },
    {
      path: 'utils',
      children: [
        {
          path: 'util-shadow',
          element: <UtilsShadow />
        }
      ]
    },
    {
      path: 'icons',
      children: [
        {
          path: 'tabler-icons',
          element: <UtilsTablerIcons />
        }
      ]
    },
    {
      path: 'icons',
      children: [
        {
          path: 'material-icons',
          element: <UtilsMaterialIcons />
        }
      ]
    },
    {
      path: 'maintenance',
      children: [
        {
          path: 'studentManagement',
          element: <MaintainUser />
        }
      ]
    },
    {
      path: 'maintenance',
      children: [
        {
          path: 'books',
          element: <MaintainBooks />
        }
      ]
    },
    {
      path: 'maintenance',
      children: [
        {
          path: 'catalog',
          element: <MaintainCatalog />
        }
      ]
    },
    {
      path: 'services',
      children: [
        {
          path: 'searchBooks',
          element: <ServiceSearchBook />
        }
      ]
    },
    {
      path: 'services',
      children: [
        {
          path: 'cart',
          element: <ServiceCart />
        }
      ]
    },
    {
      path: 'services',
      children: [
        {
          path: 'forApproval',
          element: <ServiceAdminApproval />
        }
      ]
    },
    {
      path: 'services',
      children: [
        {
          path: 'studentHistory',
          element: <ServiceStudentHistory />
        }
      ]
    },
    {
      path: 'services',
      children: [
        {
          path: 'adminHistory',
          element: <ServiceAdminHistory />
        }
      ]
    },
    {
      path: 'sample-page',
      element: <SamplePage />
    }
  ]
};

export default MainRoutes;
