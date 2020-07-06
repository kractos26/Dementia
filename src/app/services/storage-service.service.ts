import { Injectable } from '@angular/core';
import { Session} from '../modelos/session.model';
import { Router } from '@angular/router';
import {User} from '../modelos/user.model';
import { Guid } from "guid-typescript";
import {UrlBackendServices} from './AppServiceGlobal';

@Injectable({
  providedIn: 'root'
})
export class StorageServiceService {

  private localStorageService;
  private currentSession: Session = null;
  
  constructor() {
    this.localStorageService = localStorage;
    this.currentSession = this.loadSessionData();
  }

  setCurrentApplication():void
  {
    let aplicacion = {
      IdApplication : Guid.create().toString()
    }
      this.localStorageService.setItem('currentApplication', JSON.stringify(aplicacion));
  }

  getCurrentApplication():any{
    if(this.localStorageService.getItem('currentApplication') == null){
      this.setCurrentApplication();
    }
    let sessionStr =  this.localStorageService.getItem('currentApplication');
    return (sessionStr) ? JSON.parse(sessionStr).IdApplication   : null;
  }

  


  loadSessionData(): Session {
    let sessionStr = this.localStorageService.getItem('currentUser');
    return (sessionStr) ? <Session> JSON.parse(sessionStr) : null;
  }

  setCurrentSession(session: Session): void {
    this.currentSession = session;
    this.localStorageService.setItem('currentUser', JSON.stringify(session));
  }

  getCurrentSession(): Session {
    let sessionStr = this.localStorageService.getItem('currentUser');
    this.currentSession = (sessionStr) ? <Session> JSON.parse(sessionStr) : null;
    return this.currentSession;
  }

  removeCurrentSession(): void {
    this.localStorageService.removeItem('currentUser');
    this.currentSession = null;
  }

  getCurrentUser() {
    let session: Session = this.getCurrentSession();
    const usuario: User = (session && session.JSonResult) ? session.JSonResult : new User();
    return usuario;
  }

  getCurrentToken(): string {
    let session: Session = this.getCurrentSession();
    const token: string = (session && session.JSonResult) ? session.JSonResult.Token : null;
    return token;
  }

  isUserEmailValidated(): boolean {
    let session: Session = this.getCurrentSession();
    const validated: boolean = (session && session.JSonResult) ? session.JSonResult.EmailVerified : false;
    return validated;
  }

  isUserPhoneValidated(): boolean {
    let session: Session = this.getCurrentSession();
    const validated: boolean = (session && session.JSonResult) ? session.JSonResult.PhoneVerified : false;
    
    //return validated;
    return true;
  }

  isAuthenticated(): boolean {
    return (this.getCurrentToken() != null) ? true : false;
  }
}
