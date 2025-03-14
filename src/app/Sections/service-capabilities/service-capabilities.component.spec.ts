import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceCapabilitiesComponent } from './service-capabilities.component';

describe('ServiceCapabilitiesComponent', () => {
  let component: ServiceCapabilitiesComponent;
  let fixture: ComponentFixture<ServiceCapabilitiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ServiceCapabilitiesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServiceCapabilitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
