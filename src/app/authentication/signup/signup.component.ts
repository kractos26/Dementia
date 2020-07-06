import { Component,Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators,AbstractControl} from '@angular/forms';
import {Observable} from 'rxjs';
import {UserService} from './../../services/user.service';
import {User} from '../../modelos/user.model';
import {Country } from '../../modelos/country.model';
import {Session } from '../../modelos/session.model';
import { CacheStorageService } from './../../services/cachestorage.service';
import { AutenticationService } from '../../services/autentication.service';
import { RegisterResponse } from 'src/app/modelos/Response/RegisterResponse.model';
import {StorageServiceService} from '../../services/storage-service.service';
import {Router} from '@angular/router';
import {Md5} from 'ts-md5/dist/md5';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})

export class SignupComponent {

  @Input()user: User;
  IdCountry;
  formularioSingUp: FormGroup;
  confirmpassoword: string;
  mensaje: any = [];
  static IsEquasError:boolean = false;
  IsCountry: boolean;
  country : Country[] = [];
  results$:Observable<RegisterResponse>;
  resultsLogin$:Observable<Session>;
  
  constructor(private serviceuser: UserService, public fb: FormBuilder,
     private cacheManager: CacheStorageService, private serviLogin:AutenticationService,
     private router:Router, private storage:StorageServiceService) 
  {
    this.getCountrys();
  }

  ngOnInit() {
  	this.user = new User();
    this.formularioSingUp = this.fb.group({
      name:['', Validators.compose([Validators.required, Validators.minLength(5)])],
      email: ['', Validators.compose([Validators.required, Validators.email, Validators.required])],
      password: ['', Validators.compose([Validators.required, Validators.minLength(7)])],
      confirmPassword: ['', [Validators.required]],
      cell: ['', [Validators.required]],
      SelectCountry: ['', [Validators.required]],
      terms: ['', [Validators.required]]
    },
    {
      validator: [SignupComponent.MatchPassword, SignupComponent.EvaluateStrength]
    });
  }

  registerUser() 
  {
  	if (this.formularioSingUp.invalid || !this.user.IdCountry || this.user.IdCountry == ''){
      return;
    }    

    this.results$ = this.serviceuser.createUser(this.user);
    this.results$.subscribe(respuesta=>
    {
      var userResponse: RegisterResponse = respuesta;
      if(userResponse != null && userResponse.Exitoso)
      {
          //this.router.navigate(['authentication/confirmcode/email']);
          this.login();
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
    let respuesta = this.formularioSingUp;
    return respuesta.controls;
  }

  private login()
  {
    const md5 = new Md5();
    var passMd5 : string =  md5.appendStr(this.user.Password).end().toString();

    const consulta = {
      ApplicationId : this.storage.getCurrentApplication(),
      Usuario       : this.user.Login,
      Password      : passMd5
    };

    this.resultsLogin$ = this.serviLogin.LoginUser(consulta);

    this.resultsLogin$.subscribe(respuesta=>
    {
      var sessionInfo : Session = respuesta;
      if(sessionInfo.JSonResult != null && sessionInfo.Message != "")
      {
          this.storage.setCurrentSession(sessionInfo);
          this.router.navigate(['/starter']);
      }
      else{
        this.mensaje = [{
          id:1,
          type:'warning',
          message:sessionInfo.Message
        }];
      }
    },error=>{
      this.mensaje = [{
         id:2,
         type:'danger',
         message:error.statusText
      }];
    });
  }

  private getCountrys() {
    this.cacheManager.getData<Country>("Country",(array : Country[]) =>
    {
        //array.unshift({ IdCountry: "", Name: "Seleccione un pais"});
        this.country = array;
    });
  }

 static MatchPassword(AC: AbstractControl) 
 {
       let password = AC.get('password').value;
       let confirmPassword = AC.get('confirmPassword').value;
        if(password != confirmPassword) {
          SignupComponent.IsEquasError = true;
            AC.get('confirmPassword').setErrors( {MatchPassword: true} )
        }
        else {
            return null
        }
  }

  static EvaluateStrength(AC: AbstractControl) 
  {
    let password = AC.get('password').value;
    let nivel = SignupComponent.pwstrength(password);
    if(nivel < 3) 
    {
      SignupComponent.IsEquasError = true;
        AC.get('password').setErrors( {EvaluateStrength: true} )
    }
    else {
        return null
    }
  }

  static pwstrength(n: string) 
  {
    if(n == null || n == "")
      return 0;

    var t = 0, u = n.length, f, i, r;
    return (t += u < 5 ? 0 : u < 8 ? 5 : u < 16 ? 10 : 15, i = n.match(/[a-z]/g), i && (t += 1), r = n.match(/\d/g), r && r.length > 1 && i && (t += 15), f = n.match(/[A-Z]/g), f && (t += 5), f && i && r && (t += 5), n.match(/\s/) && (t += 10), t < 15) ? 0 : t < 20 ? 1 : t < 35 ? 2 : 3
  }
}
