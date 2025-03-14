import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OptionServiceComponent } from './option-service.component';

describe('OptionServiceComponent', () => {
  let component: OptionServiceComponent;
  let fixture: ComponentFixture<OptionServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OptionServiceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OptionServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
