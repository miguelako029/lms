// assets
import { IconSettings, IconBook2, IconCategory } from '@tabler/icons';

// constant
const icons = {
  IconSettings,
  IconBook2,
  IconCategory
};

// ==============================|| UTILITIES MENU ITEMS ||============================== //

const utilities = {
  id: 'maintenance',
  title: 'Maintenance',
  type: 'group',
  children: [
    {
      id: 'studentMgt',
      title: 'Student Management',
      type: 'item',
      url: '/utils/util-typography',
      icon: icons.IconSettings,
      breadcrumbs: false
    },
    {
      id: 'books',
      title: 'Books',
      type: 'item',
      url: '/utils/util-color',
      icon: icons.IconBook2,
      breadcrumbs: false
    },
    {
      id: 'catalogs',
      title: 'Catalog',
      type: 'item',
      url: '/utils/util-shadow',
      icon: icons.IconCategory,
      breadcrumbs: false
    }
    // {
    //   id: 'icons',
    //   title: 'Icons',
    //   type: 'collapse',
    //   icon: icons.IconWindmill,
    //   children: [
    //     {
    //       id: 'tabler-icons',
    //       title: 'Tabler Icons',
    //       type: 'item',
    //       url: '/icons/tabler-icons',
    //       breadcrumbs: false
    //     },
    //     {
    //       id: 'material-icons',
    //       title: 'Material Icons',
    //       type: 'item',
    //       external: true,
    //       target: '_blank',
    //       url: 'https://mui.com/material-ui/material-icons/',
    //       breadcrumbs: false
    //     }
    //   ]
    // }
  ]
};

export default utilities;
