import { Component, OnInit } from '@angular/core';

import { ApiService } from './../../api.service';
import { Product } from './../../../model/product';

@Component({
  selector: 'app-note-list',
  templateUrl: './note-list.component.html',
  styleUrls: ['./note-list.component.css']
})
export class NoteListComponent implements OnInit {

  products!: Product[];
selectedProduct: Product = { id : 0 , name: '', price: 0};

  constructor(private apiService: ApiService) {
      this.apiService.readProducts()
        .subscribe((products: Product[]) => {
          this.products = products;
          console.log(this.products);
        });
  }

  ngOnInit(): void {
  }

  // tslint:disable-next-line: typedef
createOrUpdateProduct(form: any){
  form.value.id = this.selectedProduct.id;
  form.value.name = this.selectedProduct.name;
  form.value.price = this.selectedProduct.price;
  if (this.selectedProduct && this.selectedProduct.id) {
    this.apiService.updateProduct(form.value)
    .subscribe((product: Product) => {
      console.log('Product updated' , product);
      this.apiService.readProducts()
        .subscribe((products: Product[]) => {
          this.products = products;
        });
      });
  } else {
  this.apiService.createProduct(form.value)
    .subscribe((product: Product) => {
      console.log('Product created, ', product);
      this.apiService.readProducts()
        .subscribe((products: Product[]) => {
          this.products = products;
        });
    });
  }
}

// tslint:disable-next-line: typedef
selectProduct(product: Product){
this.selectedProduct = product;
}

// tslint:disable-next-line: typedef
deleteProduct(id: number){
  this.apiService.deleteProduct(id)
    .subscribe((product: Product) => {
      console.log('Product deleted, ', product);
      this.apiService.readProducts()
        .subscribe((products: Product[]) => {
          this.products = products;
        });
      });
}

}
