import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  templateUrl: 'product.component.html',
  styleUrls: ['product.component.scss']
})
export class ProductComponent implements OnInit {

  tipoConfirm: string;
  capeta = '';
  elementos:any = [1,2,4,5,6,7,8,9]
  constructor( private route: ActivatedRoute,
   private router: Router) {
  }
  ngOnInit(): void {
   
    this.tipoConfirm = this.route.snapshot.params['id'];
    this.capeta = (this.tipoConfirm === '1') ? 'mosaicos' : 'mugs';

  }

  detallesProducto()
  {
    this.router.navigate(['ecommerce/details']);
  }

}

