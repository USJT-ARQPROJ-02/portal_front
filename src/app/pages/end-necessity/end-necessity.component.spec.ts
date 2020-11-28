import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EndNecessityComponent } from './end-necessity.component';

describe('EndNecessityComponent', () => {
  let component: EndNecessityComponent;
  let fixture: ComponentFixture<EndNecessityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EndNecessityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EndNecessityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
