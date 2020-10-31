import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VoluntaryInfoComponent } from './voluntary-info.component';

describe('VoluntaryInfoComponent', () => {
  let component: VoluntaryInfoComponent;
  let fixture: ComponentFixture<VoluntaryInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VoluntaryInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VoluntaryInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
