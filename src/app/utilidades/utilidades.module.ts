
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AlertaComponent } from './Alerta/alerta.component';

import { FileUploadModule } from 'ng2-file-upload';
import { JsonpModule } from '@angular/http';
import { CalificacionComponent } from './calificacion/calificacion.component';
import { ListaSeleccionComponent } from './ListaSeleccion/ListaSeleccion.component';
import { BackButtonComponent } from './BackButton/BackButton.component';
import { ReservasNotificacionComponent } from 'src/app/utilidades/ReservasNotificacion/ReservasNotificacion.component';
//import { NgxDatatableModule } from '@swimlane/ngx-datatable';
//import { Ng2SmartTableModule } from 'ng2-smart-table';

@NgModule({
  declarations: [
    AlertaComponent,
  
    CalificacionComponent,
    ListaSeleccionComponent,
    
    BackButtonComponent,
   
    ReservasNotificacionComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    NgbModule,
    FileUploadModule,
    JsonpModule,
    ReactiveFormsModule
    //NgxDatatableModule,
    //Ng2SmartTableModule
  ],
  exports: [
    AlertaComponent,
    CalificacionComponent,
    ListaSeleccionComponent,
    BackButtonComponent,
    
    ReservasNotificacionComponent
  ],
  providers: [],
  bootstrap: [ListaSeleccionComponent]
})

export class UtilidadesModule { }
