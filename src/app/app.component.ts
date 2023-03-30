import { Component, Injectable, OnInit } from '@angular/core';
import { from } from 'rxjs';
import {MatDialog,MatDialogConfig} from '@angular/material/dialog' ;
import { ItemComponent } from './item/item.component';
import { bottom } from '@popperjs/core';

@Injectable({
  providedIn: 'root'
})

@Component({
  selector: 'app-root',
  templateUrl:'./app.component.html'
  ,
  styleUrls: ['./app.component.css']
})
export class AppComponent  {
searchText:any;

  constructor(public dialog:MatDialog){

  }

 tabKeys=["First Name","Last Name","Address","city","state","Order Total"]
  users:any=[];

openDialog():void{
  const dialogRef=this.dialog.open(ItemComponent,{width:'800px',
  height:'600px',
  position:{
    top:'-10%',
    left: '20%',

  }

});
  dialogRef.componentInstance.formData.subscribe(user=>{
    this.users.push(user);
  });
}



}

