import { Injectable } from '@angular/core';

export interface BadgeItem {
  type: string;
  value: string;
}

export interface ChildrenItems {
  state: string;
  target?: boolean;
  name: string;
  type?: string;
  children?: ChildrenItems[];
}

export interface MainMenuItems {
  state: string;
  short_label?: string;
  main_state?: string;
  target?: boolean;
  name: string;
  type: string;
  icon: string;
  badge?: BadgeItem[];
  children?: ChildrenItems[];
}

export interface Menu {
  label: string;
  main: MainMenuItems[];
}

// const MENUITEMS = [
//   {
//     label: 'Navigation',
//     main: [
//       {
//         state: 'dashboard',
//         short_label: 'D',
//         name: 'Dashboard',
//         type: 'link',
//         icon: 'ti-home'
//       },
//       {
//         state: 'basic',
//         short_label: 'B',
//         name: 'Basic Components',
//         type: 'sub',
//         icon: 'ti-layout-grid2-alt',
//         children: [
//           {
//             state: 'button',
//             name: 'Button'
//           },
//           {
//             state: 'typography',
//             name: 'Typography'
//           }
//         ]
//       },
//       {
//         state: 'notifications',
//         short_label: 'n',
//         name: 'Notifications',
//         type: 'link',
//         icon: 'ti-crown'
//       },
//     ],
//   },
//   {
//     label: 'Tables',
//     main: [
//       {
//         state: 'bootstrap-table',
//         short_label: 'B',
//         name: 'Bootstrap Table',
//         type: 'link',
//         icon: 'ti-receipt'
//       }
//     ]
//   },
//   {
//     label: 'Map And Extra Pages ',
//     main: [
//       {
//         state: 'map',
//         short_label: 'M',
//         name: 'Maps',
//         type: 'link',
//         icon: 'ti-map-alt'
//       },
//       {
//         state: 'authentication',
//         short_label: 'A',
//         name: 'Authentication',
//         type: 'sub',
//         icon: 'ti-id-badge',
//         children: [
//           {
//             state: 'login',
//             type: 'link',
//             name: 'Login',
//             target: true
//           }, {
//             state: 'registration',
//             type: 'link',
//             name: 'Registration',
//             target: true
//           }
//         ]
//       },
//       {
//         state: 'error',
//         external: 'http://lite.codedthemes.com/guru-able/error.html',
//         name: 'Error',
//         type: 'external',
//         icon: 'ti-layout-list-post',
//         target: true
//       },
//       {
//         state: 'user',
//         short_label: 'U',
//         name: 'User Profile',
//         type: 'link',
//         icon: 'ti-user'
//       }
//     ]
//   },
//   {
//     label: 'Other',
//     main: [
//       {
//         state: '',
//         short_label: 'M',
//         name: 'Menu Levels',
//         type: 'sub',
//         icon: 'ti-direction-alt',
//         children: [
//           {
//             state: '',
//             name: 'Menu Level 2.1',
//             target: true
//           }, {
//             state: '',
//             name: 'Menu Level 2.2',
//             type: 'sub',
//             children: [
//               {
//                 state: '',
//                 name: 'Menu Level 2.2.1',
//                 target: true
//               },
//               {
//                 state: '',
//                 name: 'Menu Level 2.2.2',
//                 target: true
//               }
//             ]
//           }, {
//             state: '',
//             name: 'Menu Level 2.3',
//             target: true
//           }, {
//             state: '',
//             name: 'Menu Level 2.4',
//             type: 'sub',
//             children: [
//               {
//                 state: '',
//                 name: 'Menu Level 2.4.1',
//                 target: true
//               },
//               {
//                 state: '',
//                 name: 'Menu Level 2.4.2',
//                 target: true
//               }
//             ]
//           }
//         ]
//       },
//       {
//         state: 'simple-page',
//         short_label: 'S',
//         name: 'Simple Page',
//         type: 'link',
//         icon: 'ti-layout-sidebar-left'
//       }
//     ]
//   }, {
//     label: 'Support',
//     main: [
//       {
//         state: 'Upgrade To Pro',
//         short_label: 'U',
//         external: 'https://codedthemes.com/item/guru-able-admin-template/',
//         name: 'Upgrade To Pro',
//         type: 'external',
//         icon: 'ti-layout-list-post',
//         target: true
//       }
//     ]
//   }
// ];

const MENUITEMS = [
  {
    label: '',
    main: [
      {
        state: 'customer-offer-dashboard',
        short_label: 'OD',
        name: 'Main Plans',
        type: 'link',
        icon: 'ti-home'
      },
      {
        state: 'customer-file-gst',
        short_label: 'FGR',
        name: 'GST Return',
        type: 'link',
        icon: 'ti-file'
      },
      {
        state: 'customer-invoices',
        short_label: 'ANG',
        name: 'Invoices ',
        type: 'link',
        icon: 'ti-pencil-alt'
      },

      {
        state: 'customer-track-gst-status',
        short_label: 'TGS',
        name: 'Track GST Status',
        type: 'link',
        icon: 'ti-crown'
      },
      {
        state: 'customer-track-gst-reports',
        short_label: 'MR',
        name: 'My Reports',
        type: 'link',
        icon: 'ti-server'
      },

      {
        state: 'customer-register-gst',
        short_label: 'CRG',
        name: 'Regiser GST',
        type: 'link',
        icon: 'ti-pencil-alt'
      },
      {
        state: 'customer-gst-services',
        short_label: 'OR',
        name: 'Other Services',
        type: 'link',
        icon: 'ti-package'
      },
      {
        state: 'customer-service-request',
        short_label: 'SR',
        name: 'Service Request',
        type: 'link',
        icon: 'ti-headphone-alt'
      }
    ]
  }
];

const RMMENUITEMS = [
  {
    label: '',
    main: [
      {
        state: 'rm-dashboard',
        short_label: 'RM',
        name: 'WorkList (New Invoices)',
        type: 'link',
        icon: 'ti-home'
      },
      {
        state: 'payments',
        short_label: 'Payments',
        name: 'Payments',
        type: 'link',
        icon: 'ti-money'
      },
      {
        state: 'pro-invoice',
        short_label: 'Processed Invoice',
        name: 'Processed Invoice',
        type: 'link',
        icon: 'ti-book'
      },
      {
        state: 'manage-customers',
        short_label: 'Manage Customers',
        name: 'Users',
        type: 'link',
        icon: 'ti-user'
      },
      {
        state: 'request',
        short_label: 'service-request',
        name: 'Service Request',
        type: 'link',
        icon: 'ti-bell'
      },
      {
        state: 'proposals',
        short_label: 'INNO-REPORT',
        name: 'Proposals',
        type: 'link',
        icon: 'ti-files'
      }
    ]
  }
];

const SUPERADMINMENUITEMS = [
  {
    label: '',
    main: [
      {
        state: 'admin-dashboard',
        short_label: 'Admin',
        name: 'Dashboard',
        type: 'link',
        icon: 'ti-home'
      },

      {
        state: 'manage-employees',
        short_label: 'Employees',
        name: 'Employees',
        type: 'link',
        icon: 'ti-user'
      },

      {
        state: 'manage-reports',
        short_label: 'Reports',
        name: 'Reports',
        type: 'link',
        icon: 'ti-user'
      }
      // ,
      // {
      //   state: 'gst',
      //   short_label: 'gst-report',
      //   name: 'GST',
      //   type: 'link',
      //   icon: 'ti-receipt'
      // },
      // {
      //   state: 'proposals',
      //   short_label: 'INNO-REPORT',
      //   name: 'Proposals',
      //   type: 'link',
      //   icon: 'ti-bag'
      // },
    ]
  }
];
@Injectable()
export class MenuItems {
  getAll(): Menu[] {
    return MENUITEMS;
  }
  getRMAllMenu(): Menu[] {
    return RMMENUITEMS;
  }
  getSuperAdminMenu(): Menu[] {
    return SUPERADMINMENUITEMS;
  }
}
