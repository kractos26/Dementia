import { Input, Output, Component, OnInit} from '@angular/core';
import { CacheStorageService } from './../../services/cachestorage.service';
import { GenericStorageService } from 'src/app/services/genericstorage.service';
import { AnimationRendererFactory } from '@angular/platform-browser/animations/src/animation_renderer';

@Component({
  selector: 'app-listaseleccion',
  templateUrl: './ListaSeleccion.component.html',
  styleUrls: ['./ListaSeleccion.scss']
})

export class ListaSeleccionComponent<T,U> implements OnInit
{
    InfoStorageEntity : any[] = [];
    InfoGenericList : StructList[] = []

    @Input() Configuration: any

    constructor(private cacheManager: CacheStorageService,
      private genStorageTrans : GenericStorageService<T[]>)
    {
    }

    ngOnInit() 
    {
        this.InfoStorageEntity = this.genStorageTrans.getInformation(this.Configuration.StorageKey);
        if(!this.InfoStorageEntity || this.InfoStorageEntity == null)
            this.InfoStorageEntity = [];

        this.cacheManager.getData<U>(this.Configuration.MasterEntityName, (array : U[]) => 
        {
            if(this.Configuration.Filters && this.Configuration.Filters != null && this.Configuration.Filters.length > 0)
            {
                var arrayAux : U[] = [];

                for(var contFilter = 0; contFilter < this.Configuration.Filters.length; contFilter++)
                {
                    for(var cont = 0; cont < array.length; cont++)
                    {
                        if(array[cont][this.Configuration.Filters[contFilter].field] == this.Configuration.Filters[contFilter].value)
                        {
                            arrayAux.push(array[cont]);
                        }  
                    }

                    if(!this.Configuration.FiltersOperator || this.Configuration.FiltersOperator != "OR")
                    {
                        array = arrayAux;                        
                    }
                }

                array = arrayAux;
            }

            var countTransportType = 0;
            array.forEach(type => 
            {
                var indexListaGuardada = this.InfoStorageEntity.findIndex(x => x[this.Configuration.NameFieldId] == type[this.Configuration.NameFieldId]);
                this.InfoGenericList.push(
                {
                    Id :          type[this.Configuration.NameFieldId],
                    Name :        type["Name"],
                    Checked :     (indexListaGuardada != -1),
                    AdditionalField:  (this.Configuration.AdditionalFieldName != "" && indexListaGuardada != -1) ? this.InfoStorageEntity[indexListaGuardada][this.Configuration.AdditionalFieldName] : ''
                });
                countTransportType++;
            });
        });
    }

    private ModificarInfoAdicional(itemList :any, value : any)
    {
        itemList.AdditionalField = value;
        var posArray = this.InfoStorageEntity.findIndex(x => x[this.Configuration.NameFieldId] == itemList.Id);
        if(posArray != -1)
        {
          this.InfoStorageEntity[posArray][this.Configuration.AdditionalFieldName] = value;
        }      

        if(this.Configuration.EsGuardadoAutomatico)
        {
            this.GuardarAutomaticamenteEnStorage();
        }
    }

    private AgregarEnListaFinal(itemList :any)
    {
        console.log(this.Configuration.NameFieldId + ": ", itemList);
  
        var isAdd : boolean = !itemList.Checked;
        itemList.Checked = !itemList.Checked;
  
        if(isAdd)
        {
          if(this.Configuration.EsSeleccionUnica)
          {
            this.InfoGenericList.forEach(item => { item.Checked = false; });
            this.InfoStorageEntity = [];
            itemList.Checked = !itemList.Checked;
          }

          var infoGenEntity: any = [];
          infoGenEntity[this.Configuration.NameFieldId] = itemList.Id;
          if(this.Configuration.AdditionalFieldName != "")
              infoGenEntity[this.Configuration.AdditionalFieldName] = itemList.AdditionalField;
          
          this.InfoStorageEntity.push(infoGenEntity)
        }
        else
        {
          var posArray = this.InfoStorageEntity.findIndex(x => x[this.Configuration.NameFieldId] == itemList.Id);
          if(posArray != -1)
          {
            this.InfoStorageEntity.splice(posArray,1);
          }      
        }


        if(this.Configuration.EsGuardadoAutomatico)
        {
            this.GuardarAutomaticamenteEnStorage();
        }
    }

    public GuardarAutomaticamenteEnStorage()
    {
        var auxArray: T[] = [];
        this.InfoStorageEntity.forEach((item) =>
        {
            var aux: any = {};
            aux[this.Configuration.NameFieldId] = item[this.Configuration.NameFieldId];
            aux["Name"] = item["Name"];
            if(this.Configuration.AdditionalFieldName != "")
            {
              aux[this.Configuration.AdditionalFieldName] = item.AdditionalField;
            }
            auxArray.push(aux);
        });
        this.genStorageTrans.setInformation(this.Configuration.StorageKey,auxArray);
    }

    public ValidarDescripcionesDiligenciadas() : boolean
    {
        if(this.Configuration.AdditionalFieldName == "")
            return true;

        var result : boolean = true;
        this.InfoStorageEntity.forEach(element => {
          if(!element[this.Configuration.AdditionalFieldName] || element[this.Configuration.AdditionalFieldName] == "" || element[this.Configuration.AdditionalFieldName] == null)
          {
              result = false;
              return;
          }
        });

        return result;
    }
}

export class StructList
{
  Id: string
  Name : string
  Checked : boolean
  AdditionalField : string
}