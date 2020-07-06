import { Injectable } from '@angular/core';
import {UrlBackendServices} from './AppServiceGlobal';

@Injectable({
  providedIn: 'root'
})
export class GenericStorageService<T> {

  private localStorageService;
  
  constructor() {
    this.localStorageService = localStorage;
  }

  setInformation(name, info : T):void
  {
    this.localStorageService.setItem(name, JSON.stringify(info));
  }

  getInformation(name : string):any{
    let infoT =  this.localStorageService.getItem(name);
    return (infoT) ? JSON.parse(infoT) : null;
  }  

  removeInformation(name : string):void
  {
    this.localStorageService.removeItem(name);
  }
}
