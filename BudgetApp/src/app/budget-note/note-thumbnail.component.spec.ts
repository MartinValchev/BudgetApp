import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoteThumbnailComponent } from './note-thumbnail.component';

describe('BudgetNoteComponent', () => {
  let component: NoteThumbnailComponent;
  let fixture: ComponentFixture<NoteThumbnailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NoteThumbnailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NoteThumbnailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
