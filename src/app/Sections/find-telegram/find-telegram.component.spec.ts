import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FindTelegramComponent } from './find-telegram.component';

describe('FindTelegramComponent', () => {
  let component: FindTelegramComponent;
  let fixture: ComponentFixture<FindTelegramComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FindTelegramComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FindTelegramComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
