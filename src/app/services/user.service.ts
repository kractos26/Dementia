import { Injectable } from '@angular/core';
import { User } from '../modelos/user.model';
import { Session } from '../modelos/session.model';
import { RegisterResponse } from '../modelos/Response/RegisterResponse.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import { StorageServiceService } from './storage-service.service';
import {UrlBackendServices} from './AppServiceGlobal';
import {Md5} from 'ts-md5/dist/md5';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  StorageService : any;
  private ulrl = UrlBackendServices + "/api/Users";//ruta del servicio
  private ulrlPass = UrlBackendServices + "/api/ChangePassword";//ruta del servicio
  private ulrlConfirmCode = UrlBackendServices + "/api/ValidateSecurityCode";//ruta del servicio
  private ulrEvaluation = UrlBackendServices + '/api/EvalAuthentication';

  //constructor siempre invoca el objto HttpCliente para el consumo de servicios
  constructor(private http:HttpClient,private storageServ : StorageServiceService) {}

  updateUser(user:User): Observable<Session>
  {
    const headers = new HttpHeaders({"Content-Type":"application/json",'Access-Control-Allow-Origin': '*'});
    const consulta = {
      ApplicationId : this.storageServ.getCurrentApplication(),
      Token         : this.storageServ.getCurrentToken(),
      IdUser        : this.storageServ.getCurrentUser().IdUser,
      Email         : user.Email,
      CellPhone     : user.CellPhone,
      IdCountry     : user.IdCountry
    };

  	return this.http.post<Session>(this.ulrl,consulta,{headers:headers});
  }

  changePassword(user:User): Observable<RegisterResponse>
  {
    const md5 = new Md5();
    var passMd5 : string =  md5.appendStr(user.Password).end().toString();

    const headers = new HttpHeaders({"Content-Type":"application/json",'Access-Control-Allow-Origin': '*'});
    const consulta = {
      ApplicationId : this.storageServ.getCurrentApplication(),
      Token         : this.storageServ.getCurrentToken(),
      IdUser        : this.storageServ.getCurrentUser().IdUser,
      Password      : passMd5
    };

  	return this.http.post<RegisterResponse>(this.ulrlPass,consulta,{headers:headers});
  }

  createUser(user: User): Observable<RegisterResponse>
  {
    const md5 = new Md5();
    var passMd5 : string =  md5.appendStr(user.Password).end().toString();

  	const headers = new HttpHeaders({"Content-Type":"application/json",'Access-Control-Allow-Origin': '*'});
    const consulta = {
      ApplicationId  : this.storageServ.getCurrentApplication(),
      Login         : user.Login,
      Password      : passMd5,
      Email         : user.Email,
      CellPhone     : user.CellPhone,
      IdCountry     : user.IdCountry
    };
  
    return this.http.put<RegisterResponse>(this.ulrl,consulta,{headers:headers});
  }

  confirmCode(code: string, tipo: string): Observable<RegisterResponse>
  {
  	const headers = new HttpHeaders({"Content-Type":"application/json",'Access-Control-Allow-Origin': '*'});
    const consulta = {
      ApplicationId  : this.storageServ.getCurrentApplication(),
      IdUser         : this.storageServ.getCurrentUser().IdUser,
      Token          : this.storageServ.getCurrentToken(),
      CodeType       : tipo,
      Code           : code
    };
  
    return this.http.post<RegisterResponse>(this.ulrlConfirmCode,consulta,{headers:headers});
  }

  GetSecurityCode(tipo: string): Observable<RegisterResponse>
  {
  	const headers = new HttpHeaders({"Content-Type":"application/json",'Access-Control-Allow-Origin': '*'});
    const consulta = {
      ApplicationId  : this.storageServ.getCurrentApplication(),
      IdUser         : this.storageServ.getCurrentUser().IdUser,
      Token          : this.storageServ.getCurrentToken(),
      CodeType       : tipo
    };
  
    return this.http.put<RegisterResponse>(this.ulrlConfirmCode,consulta,{headers:headers});
  }

  EvalAuthentication(): Observable<Session>
  {
      const headers = new HttpHeaders({'Content-Type': 'application/json','Access-Control-Allow-Origin': '*'});  
      const consulta = 
      {
        ApplicationId       : this.storageServ.getCurrentApplication(),
        Token               : this.storageServ.getCurrentToken()
      };

      return this.http.post<Session>(this.ulrEvaluation, consulta, {headers: headers});
   }
}
