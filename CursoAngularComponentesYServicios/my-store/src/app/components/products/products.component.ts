import { Component } from '@angular/core';
import { Product } from 'src/models/product.model';
import { StoreService } from '../../services/store.service'
import { ProductsService } from 'src/app/services/products.service';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent {

  myShoppingCart: Product[] = [];
  total = 0;
  products: Product[] = [];
  today = new Date();
  date = new Date(2021, 1, 21);

  constructor(
    private storeService: StoreService,
    private productService: ProductsService
    ){
      this.myShoppingCart = this.storeService.getShoppingCart();
    }

    // Llamadas asyncronas se realizan en el ngOnit
    // Angular maneja un pattern llamado observable y para obtener los datos necesitamos correr
    // el metodo subscribe donde tendremos la info que viene de la api
  ngOnInit(): void{
    this.productService.getAllProducts().subscribe(data => {
      this.products = data
    });
  }

  onAddToShoppingCart(product: Product){
    this.storeService.addProduct(product);
    this.total = this.storeService.getTotal();
  }
}
