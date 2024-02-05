import { Component } from '@angular/core';
import { Wish } from "../../../../shared/interfaces";
import { WishListService } from "../../services/wish-list.service";
import { Observable } from "rxjs";

@Component({
  selector: 'app-wish-list-view',
  templateUrl: './wish-list-view.component.html',
  styleUrls: ['./wish-list-view.component.scss']
})
export class WishListViewComponent {
  wishes$: Observable<Wish[]> = this._wishListService.getAllWishes();
  constructor(private readonly _wishListService: WishListService) { }
}
