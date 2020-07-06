import { Input, Component, OnInit } from '@angular/core';
import { GenericStorageService } from 'src/app/services/genericstorage.service';
import { Reservation } from 'src/app/modelos/Reservas/Reservation.model';
import { ReservationList } from 'src/app/modelos/Reservas/ReservationList.model';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ReservasNotificacion',
  styleUrls: ['./ReservasNotificacion.component.css'],
  templateUrl: './ReservasNotificacion.component.html'
})
export class ReservasNotificacionComponent implements OnInit 
{
    public config: PerfectScrollbarConfigInterface = {};
    InfoReservas: ReservationList[];
    TituloReservas: string;
    CantidadReservas: number;

    constructor(
      private genStorageServ : GenericStorageService<ReservationList[]>,
      private router:Router,
    ) {} 
     
    ngOnInit(): void 
    {
      this.CargarReservasPendientes(); 
    }

    public CargarReservasPendientes()
    {
        this.InfoReservas = this.genStorageServ.getInformation("InfoReservations");   
        if(this.InfoReservas == null)
        {
            this.InfoReservas = [];
        }

        var plural = (this.InfoReservas.length > 1) ?  "s" : "";
        this.TituloReservas = this.InfoReservas.length + " Nueva" + plural + " Reserva" + plural + " Por Confirmar";
    }

    public Agregar(IdServiceType: string, IdService: string, IdSpace: string, Titulo: string, Tipo: string)
    {
        console.log("Registrando en Reservas: " + IdServiceType + " " + IdService + " " + IdSpace);
        var InfoReservasActuales: ReservationList[];
  
        InfoReservasActuales = this.genStorageServ.getInformation("InfoReservations");   
        if(InfoReservasActuales == null)
        {
            InfoReservasActuales = [];
        }
  
        var infoNuevaReserva: Reservation = new Reservation();
        infoNuevaReserva.IdService = IdService;
        infoNuevaReserva.IdServiceType = IdServiceType;
        infoNuevaReserva.IdSpace = IdSpace;
        infoNuevaReserva.ReservationState = 0;
        
  
        var index = InfoReservasActuales.findIndex(x=>x.IdService == IdService);
        if(index != -1)
        {
            if(InfoReservasActuales[index].Reservations == null)
                InfoReservasActuales[index].Reservations = [];
  
            var subIndex = InfoReservasActuales[index].Reservations.findIndex(x=>x.IdSpace == IdSpace);
            if(subIndex == -1)
                InfoReservasActuales[index].Reservations.push(infoNuevaReserva);
        }
        else
        {
          var infoNuevoPackReservas: ReservationList = new ReservationList();
          infoNuevoPackReservas.IdService = IdService;
          infoNuevoPackReservas.Titulo = Titulo;
          infoNuevoPackReservas.Tipo = Tipo;
          infoNuevoPackReservas.Reservations = [];
          infoNuevoPackReservas.Reservations.push(infoNuevaReserva);
          
          InfoReservasActuales.push(infoNuevoPackReservas);
        }
  
        this.genStorageServ.setInformation("InfoReservations", InfoReservasActuales);   
        this.CargarReservasPendientes();
    }

    private IniciarReserva(IdServicio: string, Tipo: string)
    {
      this.router.navigate(["/reservas/Reservar" + Tipo + "/" + IdServicio]);
    }
}