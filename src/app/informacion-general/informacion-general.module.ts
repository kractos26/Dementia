import { QuienesSomosComponent } from './quienes-somos/quienes-somos.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { InfoGenealRoutes } from './informacion-general.routing';

@NgModule({
  declarations: [QuienesSomosComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(InfoGenealRoutes), FormsModule, NgbModule
  ]
})
export class InformacionGeneralModule { }
