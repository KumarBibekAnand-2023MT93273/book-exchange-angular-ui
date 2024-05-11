import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExchangeRequestStatusComponent } from './exchange-request-status.component';

describe('ExchangeRequestStatusComponent', () => {
  let component: ExchangeRequestStatusComponent;
  let fixture: ComponentFixture<ExchangeRequestStatusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExchangeRequestStatusComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExchangeRequestStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
