import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProcessedDocumentsComponent } from './processed-documents.component';

describe('ProcessedDocumentsComponent', () => {
  let component: ProcessedDocumentsComponent;
  let fixture: ComponentFixture<ProcessedDocumentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProcessedDocumentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProcessedDocumentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
