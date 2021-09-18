import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MultipleTextComponent } from './multiple-text.component';

describe('MultipleTextComponent', () => {
  let component: MultipleTextComponent;
  let fixture: ComponentFixture<MultipleTextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MultipleTextComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MultipleTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
