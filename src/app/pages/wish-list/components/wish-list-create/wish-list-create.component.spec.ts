import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WishListCreateComponent } from './wish-list-create.component';

describe('WishLisCreateComponent', () => {
  let component: WishListCreateComponent;
  let fixture: ComponentFixture<WishListCreateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WishListCreateComponent]
    });
    fixture = TestBed.createComponent(WishListCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
