import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExchangeRequestDialogComponent } from './exchange-request-dialog.component';

describe('ExchangeRequestDialogComponent', () => {
  let component: ExchangeRequestDialogComponent;
  let fixture: ComponentFixture<ExchangeRequestDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExchangeRequestDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExchangeRequestDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
