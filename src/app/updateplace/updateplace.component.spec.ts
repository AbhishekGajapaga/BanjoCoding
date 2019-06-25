import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateplaceComponent } from './updateplace.component';

describe('UpdateplaceComponent', () => {
  let component: UpdateplaceComponent;
  let fixture: ComponentFixture<UpdateplaceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateplaceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateplaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
