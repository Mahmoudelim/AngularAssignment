import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ItemComponent } from './item/item.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import{MatButtonModule}from '@angular/material/button'

@NgModule({
  declarations: [
    AppComponent,
    ItemComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    Ng2SearchPipeModule,
    MatDialogModule,
    MatIconModule,
    MatButtonModule,


  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents:[ItemComponent]

})
export class AppModule { }
