import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PRODUCTOS } from './produc-items';
import { Producto } from 'src/app/modelos/productos.model';
import { ProducView } from 'src/app/modelos/producView.model';
@Component({
  templateUrl: 'product.component.html',
  styleUrls: ['product.component.scss']
})
export class ProductComponent implements OnInit {

  tipoConfirm: string;
  p:number=1
  productoitems:any[] = [];
  productos:Producto[] = [];
  i:number=0;
  j:number=0;
   multi = [[1, 2, 3], [23, 24, 25]];
  constructor( private route: ActivatedRoute,


   private router: Router) {
  }
  ngOnInit(): void {
    this.tipoConfirm = this.route.snapshot.params['id'];
    this.Organizar();
  }

  detallesProducto()
  {
    this.router.navigate(['ecommerce/details']);
  }

  private Organizar() {
    
    
    PRODUCTOS.forEach(element => {
       
       this.productos.push(element);
       this.j++;
       if (this.j === 3)
       {
         this.productoitems.push(this.productos);
         this.productos = [];
         this.j = 0;
         this.i++;
       }
    })
    debugger;
    return this.productoitems;
  }
}

