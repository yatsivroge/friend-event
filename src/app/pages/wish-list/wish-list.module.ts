import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WishListComponent } from "./wish-list.component";
import { MatButtonModule } from "@angular/material/button";
import { WishListCreateComponent } from "./components/wish-list-create/wish-list-create.component";
import { MatInputModule } from "@angular/material/input";
import { WishListViewComponent } from "./components/wish-list-view/wish-list-view.component";
import { RouterModule, Routes } from "@angular/router";
import { ReactiveFormsModule } from "@angular/forms";
import { WishListService } from "./services/wish-list.service";
import { WishCardComponent } from "@shared/components/wish-card/wish-card.component";

const routes: Routes = [
  { path: '', component: WishListViewComponent },
  { path: 'create', component: WishListCreateComponent }
];

@NgModule({
  declarations: [
    WishListComponent,
    WishListCreateComponent,
    WishListViewComponent
  ],
  exports: [ WishListComponent ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatInputModule,
    RouterModule.forRoot(routes),
    ReactiveFormsModule,
    WishCardComponent
  ],
  providers: [ WishListService ]
})
export class WishListModule { }
