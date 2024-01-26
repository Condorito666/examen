import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FeePopoverPage } from './fee-popover.page';

describe('FeePopoverPage', () => {
  let component: FeePopoverPage;
  let fixture: ComponentFixture<FeePopoverPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(FeePopoverPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
