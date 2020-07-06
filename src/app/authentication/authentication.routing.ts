

import { Routes } from '@angular/router';
import { LockComponent } from './lock/lock.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { LogoutComponent } from './logout/logout.component';
import { ConfirmCodeComponent } from './confirm/confirm.component';
export const AuthenticationRoutes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'lock',
        component: LockComponent
      },
      {
        path: 'login',
        component: LoginComponent
      },
      {
        path: 'signup',
        component: SignupComponent
      },
      {
        path: 'logout',
        component: LogoutComponent
      },
      {
        path:'confirmcode/:tipo',
        component:ConfirmCodeComponent
      }
    ]
  }
];
