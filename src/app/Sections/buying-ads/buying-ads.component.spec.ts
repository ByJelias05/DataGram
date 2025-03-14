import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuyingAdsComponent } from './buying-ads.component';

describe('BuyingAdsComponent', () => {
  let component: BuyingAdsComponent;
  let fixture: ComponentFixture<BuyingAdsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BuyingAdsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BuyingAdsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
