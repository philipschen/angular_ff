import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsKitchenViewComponent } from './cons-kitchen-view.component';

describe('ConsKitchenViewComponent', () => {
  let component: ConsKitchenViewComponent;
  let fixture: ComponentFixture<ConsKitchenViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsKitchenViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsKitchenViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
