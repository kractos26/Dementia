import { UserService } from './../../services/user.service';
import {Observable} from 'rxjs';
import { Component, OnInit} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators,AbstractControl} from '@angular/forms';
import { RegisterResponse } from 'src/app/modelos/Response/RegisterResponse.model';
import { Session } from 'src/app/modelos/session.model';
import {StorageServiceService} from '../../services/storage-service.service';

@Component({
  selector: 'app-confirmcode',
  templateUrl: './confirm.component.html',
  styleUrls: ['./confirm2.component.css']
})

export class ConfirmCodeComponent implements OnInit {
  tipoConfirm:string;
  tipo: String = '';
  formularioConfirm: FormGroup;
  validateCode: string;
  mensaje: any = [];
  results$: Observable<RegisterResponse>;

  constructor(private serviceuser: UserService, private route: ActivatedRoute, 
    public fb: FormBuilder,private router:Router, private storage: StorageServiceService) {
  }

  ngOnInit(): void 
  {
    this.tipoConfirm = this.route.snapshot.params['tipo'];
    this.tipo = (this.tipoConfirm == 'email') ? 'correo electrónico' : (this.tipoConfirm == 'phone') ? 'número celular' : '';
    this.formularioConfirm = this.fb.group({
      code: ['Ingrese el código', Validators.compose([Validators.required])]
    });
  }

  validarCode():void
  {
      if (this.formularioConfirm.invalid){
        return;
      }    
  
      this.results$ = this.serviceuser.confirmCode(this.validateCode,this.tipoConfirm);
      this.results$.subscribe(respuesta=>
      {
        var userResponse: RegisterResponse = respuesta;
        if(userResponse != null && userResponse.Exitoso)
        {
            var infoSession: Session = this.storage.getCurrentSession();
            
            if(this.tipoConfirm == "email")
                infoSession.JSonResult.EmailVerified = true;
            else if (this.tipoConfirm == "phone")
                infoSession.JSonResult.EmailVerified = true;
            else if(this.tipoConfirm == 'repwd')
            {
              infoSession.JSonResult.EmailVerified = true;
              this.router.navigate(['/authentication/updatepwd']);
            }
               
            this.storage.setCurrentSession(infoSession);
            this.router.navigate(['/starter']);         
        }
        else{
            this.mensaje = [{ id:2, type:'warning', message: userResponse.MensajeResultado }];
        }
      },error=>{
        this.mensaje = [{
           id:2,
           type:'danger',
           message:error.statusText
        }];
      });
  }

  Logout():void
  {
      this.router.navigate(['/authentication/logout']);         
  }

  GetSecurityCode():void
  { 
      this.results$ = this.serviceuser.GetSecurityCode(this.tipoConfirm);
      this.results$.subscribe(respuesta=>
      {
        var userResponse: RegisterResponse = respuesta;
        if(userResponse != null && userResponse.Exitoso)
        {
            this.mensaje = [{ id:2, type:'success', message: "Se ha generado un nuevo código de activación, por favor verifique en su " + 
                                                              (this.tipoConfirm == "email" ? "correo electrónico" : "celular") + " e ingrese el código de seguridad suministrado." }];
        }
        else{
            this.mensaje = [{ id:2, type:'warning', message: userResponse.MensajeResultado }];
        }
      },error=>{
        this.mensaje = [{
           id:2,
           type:'danger',
           message:error.statusText
        }];
      });
  }

  get f()
  {
    let respuesta = this.formularioConfirm;
    return respuesta.controls;
  }

}
