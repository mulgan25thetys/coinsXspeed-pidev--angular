import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinancialServiceComponent } from './financial-service.component';

describe('FinancialServiceComponent', () => {
  let component: FinancialServiceComponent;
  let fixture: ComponentFixture<FinancialServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FinancialServiceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FinancialServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
