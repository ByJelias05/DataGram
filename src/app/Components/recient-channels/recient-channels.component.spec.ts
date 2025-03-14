import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecientChannelsComponent } from './recient-channels.component';

describe('RecientChannelsComponent', () => {
  let component: RecientChannelsComponent;
  let fixture: ComponentFixture<RecientChannelsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RecientChannelsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecientChannelsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
