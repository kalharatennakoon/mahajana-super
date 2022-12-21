import { Component } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {

  public products = [
    {
      'productId' : "001",
      'productName' : "White Basmathi Rice",
      'createdDate' : "2020.11.10",
      'quantity' : 500,
      'unitPrice' : "400",
      'productDescription' : "White Basmathi Rice imported from Pakistan"
    },
    {
      'productId' : "002",
      'productName' : "Dhal",
      'createdDate' : "2021.10.15",
      'quantity' : 320,
      'unitPrice' : "240",
      'productDescription' : "Sri Lankan organic Dhal"
    },
    { 
      'productId' : "003",
      'productName' : "sugar",
      'createdDate': "Jan 29, 2020",
      'quantity': 1200,
      'unitPrice': "200",
      'productDescription':"White sugar manufactured by Palwatte Factory"
    },
    { 
      'productId' : "004",
      'productName' : "Flour",
      'createdDate': "Jan 29, 2020",
      'quantity': 50,
      'unitPrice': "190",
      'productDescription':"Super Fine Whole grain general Purpose flour"
      },
  ]


}
