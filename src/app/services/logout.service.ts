import { GenericResponse } from './../modelos/GenericResponse';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {Router } from '@angular/router';
import {UrlBackendServices} from './AppServiceGlobal';

@Injectable({
  providedIn: 'root'
})
export class LogoutService {

  private ulrl = UrlBackendServices + '/api/logout';
  constructor(private http: HttpClient) { }

  logOut(logout): Observable<GenericResponse> {
    const headers = new HttpHeaders({'Content-Type':'application/json',
    'Access-Control-Allow-Origin': '*'
    });
     return this.http.post<GenericResponse>(this.ulrl, logout, {headers: headers});
  }

  VerifitCode():void
  {

  }
}
