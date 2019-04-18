import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterProdComponent } from './register-prod.component';

describe('RegisterProdComponent', () => {
  let component: RegisterProdComponent;
  let fixture: ComponentFixture<RegisterProdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisterProdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterProdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
