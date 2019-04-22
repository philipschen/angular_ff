import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterConsComponent } from './register-cons.component';

describe('RegisterConsComponent', () => {
  let component: RegisterConsComponent;
  let fixture: ComponentFixture<RegisterConsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisterConsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterConsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
