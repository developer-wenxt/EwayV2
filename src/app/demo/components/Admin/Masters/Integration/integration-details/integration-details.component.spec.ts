import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntegrationDetailsComponent } from './integration-details.component';

describe('IntegrationDetailsComponent', () => {
  let component: IntegrationDetailsComponent;
  let fixture: ComponentFixture<IntegrationDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IntegrationDetailsComponent]
    });
    fixture = TestBed.createComponent(IntegrationDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
