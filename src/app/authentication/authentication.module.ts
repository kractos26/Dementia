import { LogoutService } from './../services/logout.service';
import { UserService } from './../services/user.service';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LockComponent } from './lock/lock.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { AuthenticationRoutes } from './authentication.routing';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {AutenticationService} from '../services/autentication.service';
import {StorageServiceService} from '../services/storage-service.service';
import { LogoutComponent } from './logout/logout.component';
import { UtilidadesModule } from '../utilidades/utilidades.module';
import { ConfirmCodeComponent } from './confirm/confirm.component';
import { SocialLoginModule, AuthServiceConfig,FacebookLoginProvider } from "angularx-social-login";

 
let config = new AuthServiceConfig([

  {
    id: FacebookLoginProvider.PROVIDER_ID,
    provider: new FacebookLoginProvider("571679716876679")
  }
]);

export function provideConfig() {
  return config;
}
 
 
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AuthenticationRoutes),
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    UtilidadesModule,
    SocialLoginModule
  ],
  declarations: [
    LoginComponent,
    SignupComponent,
    LockComponent,
    LogoutComponent,
    ConfirmCodeComponent
  ],

  providers: [AutenticationService, StorageServiceService, UserService,  LogoutService,
    {
      provide: AuthServiceConfig,
      useFactory: provideConfig
    }
  ]
})
export class AuthenticationModule {}
