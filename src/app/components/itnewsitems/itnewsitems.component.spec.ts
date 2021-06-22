import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItnewsitemsComponent } from './itnewsitems.component';

describe('ItnewsitemsComponent', () => {
  let component: ItnewsitemsComponent;
  let fixture: ComponentFixture<ItnewsitemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItnewsitemsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ItnewsitemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
