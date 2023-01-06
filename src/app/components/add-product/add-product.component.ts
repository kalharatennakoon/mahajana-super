import { Component } from '@angular/core';

// importing FormBuilder & Validators
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent {

  constructor(private fb: FormBuilder) {}

  productFrom = this.fb.group({
    productName: ['', Validators.required],
    description: ['', Validators.required],
    category: ['', Validators.required],
    brand : ['', Validators.required],
    expiredDate: ['', Validators.required],
    manufacturedDate: ['', Validators.required],
    batchNumber: ['', Validators.required],
    unitPrice: ['', [Validators.required, Validators.min(1)]],
    quantity: ['', [Validators.required, Validators.min(50)]],
    createdDate: ['', Validators.required],
  });

  get f() {
    return this.productFrom.controls;
  }

  ngOnInt(): void {
    
  }

  onSubmit() {}










  

  // Angular Lifecycle Hooks
  // ngOnInit(): void {
  //   alert("ngOnInit called");
  //   console.log("triggered ngOnInit");
  // }

  // // ngOnChanges(): void {}


  // ngDoCheck(): void {
  //   console.log("triggered ngDoCheck");
  // }

  // ngAfterContentInit(): void {
  //   console.log("triggered ngAfterContentInit");
  // }

  // ngAfterContentChecked(): void {
  //   console.log("triggered ngAfterContentChecked");
  // }

  // ngAfterViewInit(): void {
  //   console.log("triggered ngAfterViewInit");
  // }

  // ngAfterViewChecked(): void {
  //   console.log("triggered ngAfterViewChecked");
  // }

  // ngOnDestroy(): void {
  //   alert("ngOnDestroy called");
  //   console.log("triggered ngOnDestroy");
  // }

}
