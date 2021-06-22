import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItnewsComponent } from './itnews.component';

describe('ItnewsComponent', () => {
  let component: ItnewsComponent;
  let fixture: ComponentFixture<ItnewsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItnewsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ItnewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
