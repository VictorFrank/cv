import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MtgAnalysisComponent } from './mtg-analysis.component';

describe('MtgAnalysisComponent', () => {
  let component: MtgAnalysisComponent;
  let fixture: ComponentFixture<MtgAnalysisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MtgAnalysisComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MtgAnalysisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
