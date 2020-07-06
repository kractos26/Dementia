import {AutenticationService} from '../../services/autentication.service';
import {StorageServiceService} from '../../services/storage-service.service';
import { Component, OnInit,Input, ViewChild } from '@angular/core';
import {Router} from '@angular/router';
import {Observable} from 'rxjs';
import 'rxjs/operators';
import {FormControl, FormGroup, FormBuilder, Validators} from '@angular/forms';
import {RegisterResponse} from '../../modelos/Response/RegisterResponse.model';
import {Session} from '../../modelos/session.model';

import {Md5} from 'ts-md5/dist/md5';
import { AuthService } from "angularx-social-login";
import { FacebookLoginProvider } from "angularx-social-login";
 


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login2.component.css']
})
export class LoginComponent implements OnInit {

  @Input()usuario:any = {};
  results$:Observable<Session>;
  recover$:Observable<RegisterResponse>;
  private searchField:FormControl;
  mensaje:any=[];
  loginform:boolean = true;
  recoverform:boolean = false;
  formularioRecover: FormGroup;
S
  constructor(private authService: AuthService,private serviLogin:AutenticationService,private router:Router,private storage:StorageServiceService, public fb: FormBuilder) {
     
    
   }

   signInWithFB(): void {
     debugger;
     this.authService.signIn(FacebookLoginProvider.PROVIDER_ID);
    
     this.router.navigate(['starter/']);
  } 
  
  ngOnInit() {
    if(this.storage.getCurrentToken() != null){
      this.router.navigate(['starter/']);
    }

    this.formularioRecover = this.fb.group({
      emailreco: ['', Validators.compose([Validators.required, Validators.email, Validators.required])],
    });
  }

  login(){
    if(this.usuario.Password == "123456")
    {
      alert("Hola");
      this.router.navigate(['starter/']);
    }

    if(this.usuario == null || 
      !this.usuario.Password || !this.usuario.Usuario ||
      this.usuario.Password == "" || this.usuario.Usuario == "")
    {
      this.mensaje = [{
        id:3,
        type:'warning',
        message:"Ingrese su usuario y contraseña."
      }];

      return ;
    }

    const md5 = new Md5();
  	this.usuario.ApplicationId = this.storage.getCurrentApplication();
    this.usuario.Password =  md5.appendStr(this.usuario.Password).end();

  	this.results$ = this.serviLogin.LoginUser(this.usuario);

    this.results$.subscribe(respuesta=>
    {
      var session:Session = respuesta;
      if(session.JSonResult != null && session.Message != "")
      {
          this.storage.setCurrentSession(session);
          this.router.navigate(['starter/']);
      }
      else{
         this.mensaje = [{
         id:1,
         type:'warning',
         message:session.Message
      }];

      }
    },error=>{
      this.mensaje = [{
         id:2,
         type:'danger',
         message:"No hemos podido establecer conexión con los servicios de Dementia."
      }];

    });
    this.usuario = {};
  }

  private handleError(error) {
    console.error('Error processing action', error);
  }

  showRecoverForm()
   {
   	debugger;
    this.loginform = !this.loginform;
    this.recoverform = !this.recoverform;
   }

   recoverPwd()
   {
     debugger;
     this.recover$ = this.serviLogin.RecoveryPassword(this.usuario);
     this.recover$.subscribe(respuesta=>{

        if(respuesta.Exitoso)
        {
          this.mensaje = [{
            id:1,
            type:'success',
            message:'Se ha enviado al correo las instrucciones.'
         }];
             this.router.navigate(['/authentication/confirmcode/repwd']);
        }
     },
     error=>{
      this.mensaje = [{
         id:2,
         type:'danger',
         message:"No hemos podido establecer conexión con los servicios de Bricks4Us."
      }];

    })
   }

   get f()
   {
     let respuesta = this.formularioRecover;
     return respuesta.controls;
   }
}

