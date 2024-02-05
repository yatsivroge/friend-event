import { Component } from '@angular/core';
import { FormBuilder, Validators } from "@angular/forms";
import {WishListService} from "../../services/wish-list.service";

@Component({
  selector: 'app-wish-list-create',
  templateUrl: './wish-list-create.component.html',
  styleUrls: ['./wish-list-create.component.scss']
})
export class WishListCreateComponent {
  public createWish = this._fb.group({
    title:  ['', [Validators.required]],
  })
  constructor(private readonly _fb: FormBuilder, private readonly _wishListService: WishListService) { }

  onFormSubmit(): void {
    console.log('this.createWish.getRawValue()', this.createWish.getRawValue());
    console.log('this.createWish.getRawValue()', this.createWish.getRawValue().title);
    if (this.createWish.getRawValue()?.title) {
      this._wishListService.createWish(this.createWish.getRawValue().title as string).subscribe()
    }
  }
}
