import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailedAnalyticsComponent } from './detailed-analytics.component';

describe('DetailedAnalyticsComponent', () => {
  let component: DetailedAnalyticsComponent;
  let fixture: ComponentFixture<DetailedAnalyticsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetailedAnalyticsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailedAnalyticsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
