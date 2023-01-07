import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Product } from 'src/app/Models/product.model';
import { ProductService } from 'src/app/Services/product.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css'],
})

export class AddProductComponent implements OnInit {
  productFrom = this.fb.group({
    productName: ['', Validators.required],
    description: ['', Validators.required],
    category: ['', Validators.required],
    brand: ['', Validators.required],
    expiredDate: ['', Validators.required],
    manufacturedDate: ['', Validators.required],
    batchNumber: ['', Validators.required],
    unitPrice: ['', [Validators.required, Validators.min(1)]],
    quantity: ['', [Validators.required, Validators.min(50)]],
  });

  isDataUploading = false;
  @Output() cancelAddView: EventEmitter<void> = new EventEmitter<void>();
  @Output() productAddEvent: EventEmitter<void> = new EventEmitter<void>();

  constructor(
    private fb: FormBuilder,
    private productService: ProductService
  ) {}

  ngOnInit(): void {}

  get f() {
    return this.productFrom.controls;
  }

  onSubmit() {
    const values = this.productFrom.value as Product;
    values.createdDate = new Date().toDateString();
    this.isDataUploading = true;
    this.productService.addProduct(values as Product).subscribe((res) => {
      this.productAddEvent.emit();
      this.isDataUploading = false;
      this.productFrom.reset();
    });
  }

  cancel() {
    this.cancelAddView.emit();
  }
  
}











  

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

