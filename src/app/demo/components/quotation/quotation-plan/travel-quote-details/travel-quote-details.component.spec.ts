import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TravelQuoteDetailsComponent } from './travel-quote-details.component';

describe('TravelQuoteDetailsComponent', () => {
  let component: TravelQuoteDetailsComponent;
  let fixture: ComponentFixture<TravelQuoteDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TravelQuoteDetailsComponent]
    });
    fixture = TestBed.createComponent(TravelQuoteDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
