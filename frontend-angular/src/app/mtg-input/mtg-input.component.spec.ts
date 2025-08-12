import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MtgInputComponent } from './mtg-input.component';

describe('MtgInputComponent', () => {
  let component: MtgInputComponent;
  let fixture: ComponentFixture<MtgInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MtgInputComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MtgInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
