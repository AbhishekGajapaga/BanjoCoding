import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddnewplaceComponent } from './addnewplace.component';

describe('AddnewplaceComponent', () => {
  let component: AddnewplaceComponent;
  let fixture: ComponentFixture<AddnewplaceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddnewplaceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddnewplaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
