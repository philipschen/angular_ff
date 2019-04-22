import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsKitchensComponent } from './cons-kitchens.component';

describe('ConsKitchensComponent', () => {
  let component: ConsKitchensComponent;
  let fixture: ComponentFixture<ConsKitchensComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsKitchensComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsKitchensComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
