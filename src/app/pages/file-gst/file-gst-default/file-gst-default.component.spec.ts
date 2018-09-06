import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FileGstDefaultComponent } from './file-gst-default.component';

describe('FileGstDefaultComponent', () => {
  let component: FileGstDefaultComponent;
  let fixture: ComponentFixture<FileGstDefaultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FileGstDefaultComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FileGstDefaultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
