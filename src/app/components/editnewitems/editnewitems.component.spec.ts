import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditnewitemsComponent } from './editnewitems.component';

describe('EditnewitemsComponent', () => {
  let component: EditnewitemsComponent;
  let fixture: ComponentFixture<EditnewitemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditnewitemsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditnewitemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
