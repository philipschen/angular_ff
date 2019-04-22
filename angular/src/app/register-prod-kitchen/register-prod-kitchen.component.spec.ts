import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterProdKitchenComponent } from './register-prod-kitchen.component';

describe('RegisterProdKitchenComponent', () => {
  let component: RegisterProdKitchenComponent;
  let fixture: ComponentFixture<RegisterProdKitchenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisterProdKitchenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterProdKitchenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
