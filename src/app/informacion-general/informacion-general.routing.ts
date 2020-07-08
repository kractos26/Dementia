import { Routes } from '@angular/router';
import { QuienesSomosComponent } from './quienes-somos/quienes-somos.component';




export const InfoGenealRoutes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'QuienesSomos',
        component: QuienesSomosComponent,
        data: {
          title: 'Dementia es',
          urls: [{ title: 'Dashboard', url: '/dashboard' }, { title: 'Dementia es' }]
        }
      }
    ]
  }
];
