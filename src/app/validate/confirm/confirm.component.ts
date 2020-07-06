import { Component, OnInit ,Input} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators,AbstractControl} from '@angular/forms';
@Component({
  selector: 'app-confirm',
  templateUrl: './confirm.component.html',
  styleUrls: ['./confirm.component.css']
})
export class ConfirmComponent implements OnInit {
  tipoConfirm:any = null;
  tipo: String = '';
  formularioConfirm: FormGroup;
  @Input()validate:String = '';
  mensaje: any = [];

  constructor(private route:ActivatedRoute,public fb: FormBuilder) {

  }

  ngOnInit(): void {
    debugger;
    this.tipoConfirm = this.route.snapshot.params['tipo'];
    this.tipo = (this.tipoConfirm == 'email') ? 'correo' : (this.tipoConfirm == 'phone') ? 'telefono' : '';
    this.formularioConfirm = this.fb.group({
      code: ['Ingrese el codigo', Validators.compose([Validators.required])]
    });

  }

  validarCode():void{
    this.mensaje = [{
      id:1,
      type:'warning',
      message:'mensaje'
    }];
  }
  get f()
  {
    let respuesta = this.formularioConfirm;
    return respuesta.controls;
  }

}
