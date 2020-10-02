import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterNecessityComponent } from './register-necessity.component';

describe('RegisterNecessityComponent', () => {
  let component: RegisterNecessityComponent;
  let fixture: ComponentFixture<RegisterNecessityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisterNecessityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterNecessityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
