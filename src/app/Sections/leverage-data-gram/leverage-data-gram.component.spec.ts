import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeverageDataGramComponent } from './leverage-data-gram.component';

describe('LeverageDataGramComponent', () => {
  let component: LeverageDataGramComponent;
  let fixture: ComponentFixture<LeverageDataGramComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LeverageDataGramComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LeverageDataGramComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
