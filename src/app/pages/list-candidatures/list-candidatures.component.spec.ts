import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListCandidaturesComponent } from './list-candidatures.component';

describe('ListCandidaturesComponent', () => {
  let component: ListCandidaturesComponent;
  let fixture: ComponentFixture<ListCandidaturesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListCandidaturesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListCandidaturesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
