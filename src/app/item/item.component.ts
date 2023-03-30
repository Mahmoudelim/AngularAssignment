import { FormGroup, FormsModule } from '@angular/forms';
import { from } from 'rxjs';
import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { AppComponent } from '../app.component';
import { FormBuilder } from '@angular/forms';
import { EventEmitter } from '@angular/core';
import { Output } from '@angular/core';

@Component({
  selector: 'app-item',
  template:`<div class="dialog-container">
  <h4>
    Add new Customer
  </h4>
 <button mat-button (click)="onClose()">
    close
 </button>
</div>
<div >
<form  #form="ngForm" (ngSubmit)="submitForm()" autocomplete="off">
  <div class="form-group">
    <label>First Name</label><br>
    <input  #name="ngModel" required minlength="2"
    maxlength="10" type="text" name="firstname" class="form-control"  [(ngModel)]="customer.firstName" >
    <div *ngIf="name.touched && name.invalid" class="alert alert-danger">
      <p >first name required !</p>
    </div>
  </div>

  <pre></pre>
  <div class="form-group">
    <label>last Name</label><br>
    <input #last="ngModel" type="text" name="lastname" required class="form-control"  [(ngModel)]="customer.lastName">
    <div *ngIf="last.touched && last.invalid" class="alert alert-danger">
      <p >last name inValid !</p>
    </div>
  </div>
  <pre></pre>
  <div class="form-group">
    <label>Address</label><br>
    <input #add="ngModel" type="text" name="address" class="form-control" required [(ngModel)]="customer.Address">
    <div *ngIf="add.touched && add.invalid" class="alert alert-danger">
      <p >address is invalid !</p>
    </div>
  </div>
  <pre></pre>
  <div class="form-group">
    <label>City</label><br>
    <input #city="ngModel" type="text" name="city" class="form-control"  required [(ngModel)]="customer.city">
    <div *ngIf="city.touched && city.invalid" class="alert alert-danger">
      <p >first name required !</p>
    </div>
  </div>
  <pre></pre>
  <div class="form-group">
    <label>State</label><br>
    <input #state="ngModel" type="text" name="state" class="form-control" required [(ngModel)]="customer.state">
    <div *ngIf="state.touched && state.invalid" class="alert alert-danger">
      <p >state name is invalid !</p>
    </div>
  </div>
  <pre></pre>
  <div class="form-group">
    <label>Order total</label><br>
    <input #order="ngModel" type="text" name="orderTotal" class="form-control" required [(ngModel)]="customer.orderTotal">
    <div *ngIf="order.touched && order.invalid" class="alert alert-danger">
      <p >order is invalid !</p>
    </div>
  </div>
  <pre></pre>
<button class="btn-primary" type="submit">Submit</button>
</form>
<script>
  submitForm():void {
    this.formData.emit(this.customer);
  }
</script>
</div>
  `,
  styleUrls: ['./item.component.css']
})
export class ItemComponent {

  @Output() formData=new EventEmitter<any>();
  customer ={
         firstName:'',
         lastName:'',
         Address:'',
         city:'',
         state:'',
         orderTotal:''
  }
  constructor(public dialogBox:MatDialogRef<ItemComponent>){}


onClose(){
  this.dialogBox.close();
}

submitForm():void {
  this.formData.emit(this.customer);
  this.dialogBox.close();
}
}
