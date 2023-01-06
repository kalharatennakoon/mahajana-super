import { Component } from '@angular/core';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent {

  constructor() {}

  // Angular Lifecycle Hooks
  ngOnInit(): void {
    alert("ngOnInit called");
    console.log("triggered ngOnInit");
  }

  // ngOnChanges(): void {

  // }

  ngDoCheck(): void {
    console.log("triggered ngDoCheck");
  }

  ngAfterContentInit(): void {
    console.log("triggered ngAfterContentInit");
  }

  ngAfterContentChecked(): void {
    console.log("triggered ngAfterContentChecked");
  }

  ngAfterViewInit(): void {
    console.log("triggered ngAfterViewInit");
  }

  ngAfterViewChecked(): void {
    console.log("triggered ngAfterViewChecked");
  }

  ngOnDestroy(): void {
    alert("ngOnDestroy called");
    console.log("triggered ngOnDestroy");
  }

}
