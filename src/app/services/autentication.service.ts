import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Observable} from "rxjs";
import {map} from 'rxjs/operators';
import {Session} from '../modelos/session.model';
import {Token} from '../modelos/Token.model';
import {RegisterResponse} from '../modelos/Response/RegisterResponse.model'
import {UrlBackendServices} from './AppServiceGlobal';

@Injectable({
  providedIn: 'root'
})

export class AutenticationService 
{
  private ulrl = UrlBackendServices + '/api/';

  constructor(private http: HttpClient) { }

  LoginUser(login): Observable<Session>
  {
   	    const headers = new HttpHeaders({'Content-Type': 'application/json',
   	    	'Access-Control-Allow-Origin': '*'
   	    	});
	      return this.http.post<Session>(this.ulrl+'Login', login, {headers: headers});
   }

   RecoveryPassword(login):Observable<RegisterResponse>
   {
     const headers = new HttpHeaders({'Content-Type': 'application/json',
     'Access-Control-Allow-Origin': '*'
     });
     return this.http.post<RegisterResponse>(this.ulrl+'RecoveryPassword', login, {headers: headers});
   }
}
