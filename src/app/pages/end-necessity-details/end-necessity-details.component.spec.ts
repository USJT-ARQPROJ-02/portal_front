import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EndNecessityDetailsComponent } from './end-necessity-details.component';

describe('EndNecessityDetailsComponent', () => {
  let component: EndNecessityDetailsComponent;
  let fixture: ComponentFixture<EndNecessityDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EndNecessityDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EndNecessityDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
