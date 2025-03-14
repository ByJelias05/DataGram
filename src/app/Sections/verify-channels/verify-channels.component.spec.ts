import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerifyChannelsComponent } from './verify-channels.component';

describe('VerifyChannelsComponent', () => {
  let component: VerifyChannelsComponent;
  let fixture: ComponentFixture<VerifyChannelsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VerifyChannelsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VerifyChannelsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
