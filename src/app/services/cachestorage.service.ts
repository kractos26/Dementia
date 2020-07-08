import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Observable} from 'rxjs';

import {UrlBackendServices} from './AppServiceGlobal';
import { StorageServiceService } from './storage-service.service';
import { GenericStorageService } from './genericstorage.service';


import { Producto } from '../modelos/productos.model';
import { GenericResponse } from '../modelos/Response/GenericResponse.model';



@Injectable({
  providedIn: 'root'
})
export class CacheStorageService 
{
  private localStorageService;
  
  constructor(private http: HttpClient, private storage: StorageServiceService, private genStorageServ : GenericStorageService<any>) {
    this.localStorageService = localStorage;
  }

    InicializarMetadata()
    {
        this.genStorageServ.removeInformation("Cache_Producto");
        
        this.getData<Producto>("Producto", (array : Producto	[]) => {});
        
    }

    getData<T>(name : string, onFinish : any): void
    {
      var llamadoFinalizado: boolean = false;
      let infoT =  this.localStorageService.getItem("Cache_" + name);
      if(infoT && infoT != null && infoT != "null")
      {
        onFinish(JSON.parse(infoT));
      }
      else{
        var infoArray : T[];
       /* this.get<GenericResponse<T>>(UrlBackendServices + "/api/" + name).subscribe(respuesta=>
        {
          infoArray = respuesta.JSonResult;
          if(infoArray && infoArray != null)
              this.localStorageService.setItem("Cache_" + name, JSON.stringify(infoArray));

          onFinish(infoArray);
        },
        error=>{
          onFinish(null);
        });*/
      }
    }

    private Delay(ms: number) {
      return new Promise( resolve => setTimeout(resolve, ms) );
    }

    get<U>(url) :  Observable<U> {
      const headers = new HttpHeaders({'Content-Type': 'application/json','Access-Control-Allow-Origin': '*'});

      const consulta = {
        ApplicationId : this.storage.getCurrentApplication(),
        Token : this.storage.getCurrentToken(),
        Parameters: { }
      };

      return this.http.post<U>(url, consulta, {headers: headers});
    }
}
