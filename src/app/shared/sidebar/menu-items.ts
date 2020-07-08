import { RouteInfo } from './sidebar.metadata';

export const ROUTES: RouteInfo[] =
    [
      
      
      {
        path: '',
        title: 'Productos',
        icon: '',
        class: 'has-arrow',
        extralink: false,
        submenu: [
           {
            path: '/ecommerce/products/1',
            title: 'Mosaicos',
            icon: '',
            class: '',
            extralink: false,
            submenu:[],
            parmeter:{id:1}
           },
           {
            path: '/ecommerce/products/2',
            title: 'mugs',
            icon: '',
            class: '',
            extralink: false,
            submenu:[],
            parmeter:{id:1}
           }
          
        ],
        parmeter:{}
      },
      {
        path: '',
        title: 'Informacion General',
        icon: '',
        class: 'has-arrow',
        extralink: false,
        submenu: [
           {
            path: '/info/QuienesSomos',
            title: 'Dementia es',
            icon: '',
            class: '',
            extralink: false,
            submenu:[],
            parmeter:{}
           }
        ],
        parmeter:{}
      }
    ];
  