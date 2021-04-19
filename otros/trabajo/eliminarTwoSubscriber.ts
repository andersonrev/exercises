// Para evitar tener dos subscribers como el ejemplo acontinuacion:
//
//
ngOnInit(){
  this.route.params
    .subscribe((params: Params)=> {
      const id = params.id;
      this.fetchProduct(id);
    });
}

fetchProduct(id: string) {
  this.productsService.getProduct(id)
    .subscribe(product => {
      this.producto = product;
    })
}

// SOLUCION !!!!
//

import { switchMap } from 'rxjs/operators';


// ATRIBUTOS

product: Product;


ngOnInit() {
  this.route.params
    .pipe(
      switchMap((params: Params) => {
	return this.productoService.getProduct(params.id);
      })
    )
    .subscribe((producto: Product) => {
      this.product = producto;
    })
}

// USANDO el pipe de async en el html
import { Observable } from 'rxjs';

product$ : Observable<Producto>;

ngOnInit() {
  this.product$= this.route.params
    .pipe(
      switchMap((params: Params) => {
	return this.productoService.getProduct(params.id);
      })
    )
}

// HTML
// <div *ngIf="product$ | async) as product">
// 	<div>
// 		<img [src]="product.image" alt="">
// 	</div>
// 	<div>
// 		<ul>
// 			<li>Nombre: {{product.title}}
//		</ul>
