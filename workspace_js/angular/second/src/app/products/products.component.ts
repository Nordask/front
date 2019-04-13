import { Component, Inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  constructor(@Inject(ActivatedRoute) private route: ActivatedRoute) {
    this.route.params.subscribe(params => {
      var pId = params["productId"];
      console.log(pId);
    })  
  }
}
