import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FfSplashComponent } from './ff-splash.component';

describe('FfSplashComponent', () => {
  let component: FfSplashComponent;
  let fixture: ComponentFixture<FfSplashComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FfSplashComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FfSplashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
