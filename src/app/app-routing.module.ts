import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

import { FullComponent } from './layouts/full/full.component';
import { BlankComponent } from './layouts/blank/blank.component';
import {GuardGuard} from './guard.guard';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
];

export const Approutes: Routes = [
  {
  path: '',
  component: BlankComponent,
  children: [
    {
      path: 'authentication',
      loadChildren: './authentication/authentication.module#AuthenticationModule'
    }
  ]
},
{
  path: '',
  component: FullComponent,
  children: [    
    {
      path: 'starter',
      //loadChildren: './home/home.module#HomePageModule',
      //loadChildren: './starter/starter.module#StarterModule',
      //loadChildren: './integracion/integracion.module#IntegracionModule',      
       redirectTo: '/ecommerce/products', pathMatch: 'full',
       canActivate: [GuardGuard]
    },
    {
      path:'ecommerce',
      loadChildren : './ecommerce/ecom.module#EcomModule',
    },
    {
        path:'card',
        loadChildren : './cards/cards.module#CardsModule'
    },
    
    {
        path:'info',
        loadChildren : './informacion-general/informacion-general.module#InformacionGeneralModule'
    },
    {
      path: 'validarcode',
      loadChildren : './validate/validate.module#ValidateModule',
      //canActivate: [GuardGuard]
    },
    {
      path: 'validaremail',
      loadChildren : './validate/validate.module#ValidateModule',
      //canActivate: [GuardGuard]
    }
    ]
}
];


@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
