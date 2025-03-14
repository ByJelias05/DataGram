import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SponsorsSlideComponent } from './sponsors-slide.component';

describe('SponsorsSlideComponent', () => {
  let component: SponsorsSlideComponent;
  let fixture: ComponentFixture<SponsorsSlideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SponsorsSlideComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SponsorsSlideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
