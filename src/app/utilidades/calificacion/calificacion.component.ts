import { Component, Input, Output, EventEmitter, OnInit, DebugElement } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-ngbd-calificacion',
  templateUrl: './calificacion.component.html',
  styles: [
    `
      .star {
        font-size: 2rem;
        color: #b0c4de;
      }
      .filled {
        color: yellow;
      }
      .heart {
        position: relative;
        display: inline-block;
        font-size: 3rem;
        color: #d3d3d3;
      }
      .full {
        color: red;
      }
      .half {
        position: absolute;
        display: inline-block;
        overflow: hidden;
        color: red;
      }
      .d-inline-flex.SimpleStyle 
      {
        zoom: 50%;
      }
      .card-body.SimpleStyle 
      {
        position: relative;
        top: -20px;
        left: -20px;
      }
    `
  ]
})
export class CalificacionComponent  implements OnInit 
{
  ctrl = new FormControl(null, Validators.required);s
  @Output() getRate = new EventEmitter;
  @Input()parameterRate: any = {};
  currentRate;
  stars;

  ngOnInit(): void 
  {
    this.currentRate = (this.parameterRate.nStart != null ? this.parameterRate.nStart : 5);
    this.stars = (this.parameterRate.maxStar != null ? this.parameterRate.maxStar : 5);
  }

  constructor(){}

  pasarstart(event)
  {
  	this.getRate.emit({datos: this.currentRate});
  }
}
