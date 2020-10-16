import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListNecessityComponent } from './list-necessity.component';

describe('ListNecessityComponent', () => {
  let component: ListNecessityComponent;
  let fixture: ComponentFixture<ListNecessityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListNecessityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListNecessityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
