import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatrixBoxComponent } from './matrix-box.component';

describe('MatrixBoxComponent', () => {
  let component: MatrixBoxComponent;
  let fixture: ComponentFixture<MatrixBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MatrixBoxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MatrixBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
