import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DagmaandjaarComponent } from './dagmaandjaar.component';

describe('DagmaandjaarComponent', () => {
  let component: DagmaandjaarComponent;
  let fixture: ComponentFixture<DagmaandjaarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DagmaandjaarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DagmaandjaarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
