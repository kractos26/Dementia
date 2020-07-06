import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ConfirmComponent} from './confirm/confirm.component';
import { RouterModule } from '@angular/router';
import { ValidateRoutes } from './validate.routing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';

import { UtilidadesModule } from '../utilidades/utilidades.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
@NgModule({
  declarations: [ConfirmComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(ValidateRoutes),
    FormsModule,
    HttpModule,
    UtilidadesModule,
    NgbModule,
    ReactiveFormsModule
  ],

  providers: []
})
export class ValidateModule { }
