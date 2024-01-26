import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {WishListComponent} from "./wish-list.component";
import {MatButtonModule} from "@angular/material/button";



@NgModule({
  declarations: [WishListComponent],
  exports: [WishListComponent],
  imports: [
    CommonModule,
    MatButtonModule
  ]
})
export class WishListModule { }
