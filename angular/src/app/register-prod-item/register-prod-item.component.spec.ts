import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterProdItemComponent } from './register-prod-item.component';

describe('RegisterProdItemComponent', () => {
  let component: RegisterProdItemComponent;
  let fixture: ComponentFixture<RegisterProdItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisterProdItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterProdItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
