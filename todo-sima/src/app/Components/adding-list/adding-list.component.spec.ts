import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddingListComponent } from './adding-list.component';

describe('AddingListComponent', () => {
  let component: AddingListComponent;
  let fixture: ComponentFixture<AddingListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddingListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddingListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
