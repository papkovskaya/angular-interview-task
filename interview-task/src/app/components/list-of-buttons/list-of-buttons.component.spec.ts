import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListOfButtonsComponent } from './list-of-buttons.component';

describe('ListOfButtonsComponent', () => {
  let component: ListOfButtonsComponent;
  let fixture: ComponentFixture<ListOfButtonsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListOfButtonsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListOfButtonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
