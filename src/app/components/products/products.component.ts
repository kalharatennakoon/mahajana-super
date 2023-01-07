// this is the class file of the component

import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/Models/product.model';
import { ProductService } from 'src/app/Services/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})

export class ProductsComponent implements OnInit {
  public rowIndex!: number;
  showAddProduct!: boolean;
  isLoading: boolean = false;
  showEditProduct!: boolean;
  selectedProduct!: Product;
  message!: string;
  public products: Product[] = [];
  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.getProducts();
  }

  public selectProduct(selectedRow: any, product: Product) {
    this.rowIndex = selectedRow;
    this.selectedProduct = product;
  }

  showAddProducts() {
    if (this.showEditProduct) {
      this.showEditProduct = false;
    }
    this.showAddProduct = true;
  }

  hideAddProducts() {
    this.showAddProduct = false;
  }

  refresh() {
    this.getProducts();
  }

  getProducts() {
    this.isLoading = true;
    this.productService.getProducts().subscribe((res) => {
      this.products = res.data;
      this.isLoading = false;
    });
  }

  OpenEditProductView() {
    if (this.showAddProduct) {
      this.showAddProduct = false;
    }
    this.showEditProduct = true;
  }

  closeEditView() {
    this.showEditProduct = false;
  }

  updateProductList() {
    this.getProducts();
  }
}


function ViewProductComponent(ViewProductComponent: any) {
  throw new Error('Function not implemented.');
}









// public products = [
//   {
//     'productId' : "001",
//     'productName' : "White Basmathi Rice",
//     'createdDate' : "2020-11-10",
//     'quantity' : 500,
//     'unitPrice' : "400",
//     'productDescription' : "White Basmathi Rice imported from Pakistan. High quality rice with extra fragnance. Organically grown."
//   },
//   {
//     'productId' : "002",
//     'productName' : "Dhal",
//     'createdDate' : "2021-10-15",
//     'quantity' : 320,
//     'unitPrice' : "240",
//     'productDescription' : "Sri Lankan organic Dhal"
//   },
//   { 
//     'productId' : "003",
//     'productName' : "sugar",
//     'createdDate': "2020-01-19",
//     'quantity': 1200,
//     'unitPrice': "200",
//     'productDescription':"White sugar manufactured by Palwatte Factory"
//   },
//   { 
//     'productId' : "004",
//     'productName' : "Flour",
//     'createdDate': "2020-01-29",
//     'quantity': 45,
//     'unitPrice': "190",
//     'productDescription':"Super Fine Whole grain general Purpose flour"
//     },
// ];
