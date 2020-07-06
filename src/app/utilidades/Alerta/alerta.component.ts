import { debounceTime } from 'rxjs/operators';
import { Input, Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-alerta',
  templateUrl: './alerta.component.html',
  styles: [`
    :host >>> .alert-custom {
      color: #99004d;
      background-color: #f169b4;
      border-color: #800040;
    }
  `]
})
export class AlertaComponent implements OnInit {

   @Input() public alerts: Array<IAlert> = [];
   private backup: Array<IAlert>;
  constructor() {
  
    this.backup = this.alerts.map((alert: IAlert) => Object.assign({}, alert));
   } 
     private _success = new Subject<string>();

    staticAlertClosed = false;
    successMessage: string;

   ngOnInit(): void {
    setTimeout(() => (this.staticAlertClosed = true), 5);

    this._success.subscribe(message => (this.successMessage = message));
    this._success.pipe(debounceTime(5000)).subscribe(() => (this.successMessage = null));
  }

   public closeAlert(alert: IAlert) {
    const index: number = this.alerts.indexOf(alert);
    this.alerts.splice(index, 1);
  }
}

export interface IAlert {
  id: number;
  type: string;
  message: string;
}

