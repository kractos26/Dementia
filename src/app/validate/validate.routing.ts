

import { Routes } from '@angular/router';

import { GuardGuard } from '../guard.guard';
import { ConfirmComponent } from './confirm/confirm.component';
export const ValidateRoutes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'confirm',
        component: ConfirmComponent,
        canActivate: [GuardGuard]
      },
      {
        path: 'confirm/:tipo',
        component: ConfirmComponent,
        canActivate: [GuardGuard]
      },
      {
        path: 'confirmEmail/:tipo',
        component: ConfirmComponent,
        canActivate: [GuardGuard]
      }
    ]
  }
];
