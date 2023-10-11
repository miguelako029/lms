// assets
import { IconSearch, IconShoppingCart, IconHistory, IconUserCheck, IconFileTime } from '@tabler/icons';

const icons = {
  IconSearch,
  IconShoppingCart,
  IconHistory,
  IconUserCheck,
  IconFileTime
};

// ==============================|| EXTRA PAGES MENU ITEMS ||============================== //

const pages = {
  id: 'pages',
  title: 'Services',

  type: 'group',
  children: [
    {
      id: 'search',
      title: 'Search',
      type: 'item',
      url: '/services/searchBooks',
      // target: true,
      icon: icons.IconSearch
    },
    {
      id: 'requestCart',
      title: 'Student/Cart',
      type: 'item',
      url: '/services/cart',
      // target: true,
      icon: icons.IconShoppingCart
    },
    {
      id: 'bookRequest',
      title: 'Admin/Request Approval',
      type: 'item',
      url: '/login',
      target: true,
      icon: icons.IconUserCheck
    },
    {
      id: 'studentHistory',
      title: 'Student/Transaction History',
      type: 'item',
      url: '/login',
      target: true,
      icon: icons.IconHistory
    },

    {
      id: 'bookRequest',
      title: 'Admin/Transaction History',
      type: 'item',
      url: '/login',
      target: true,
      icon: icons.IconFileTime
    }
    // {
    //   id: 'login3',
    //   title: 'Login',
    //   type: 'item',
    //   url: '/login',
    //   target: true
    // },
    // {
    //   id: 'register3',
    //   title: 'Register',
    //   type: 'item',
    //   url: '/pages/register/register3',
    //   target: true
    // }
  ]
};

export default pages;
