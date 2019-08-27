import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicDivGridsComponent } from './dynamic-div-grids.component';

describe('DynamicDivGridsComponent', () => {
  let component: DynamicDivGridsComponent;
  let fixture: ComponentFixture<DynamicDivGridsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DynamicDivGridsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DynamicDivGridsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
