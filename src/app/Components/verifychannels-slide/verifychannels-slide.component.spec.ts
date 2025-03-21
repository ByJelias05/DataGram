import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerifychannelsSlideComponent } from './verifychannels-slide.component';

describe('VerifychannelsSlideComponent', () => {
  let component: VerifychannelsSlideComponent;
  let fixture: ComponentFixture<VerifychannelsSlideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VerifychannelsSlideComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VerifychannelsSlideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
