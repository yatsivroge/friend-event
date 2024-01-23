import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentContainerComponent } from './content-container.component';

describe('ContentConteinerComponent', () => {
  let component: ContentContainerComponent;
  let fixture: ComponentFixture<ContentContainerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ContentContainerComponent]
    });
    fixture = TestBed.createComponent(ContentContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
