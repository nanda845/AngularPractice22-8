import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DataFromExternalFileComponent } from './data-from-external-file.component';

describe('DataFromExternalFileComponent', () => {
  let component: DataFromExternalFileComponent;
  let fixture: ComponentFixture<DataFromExternalFileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DataFromExternalFileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DataFromExternalFileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
