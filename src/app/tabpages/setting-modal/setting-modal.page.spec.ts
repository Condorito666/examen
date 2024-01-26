import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SettingModalPage } from './setting-modal.page';

describe('SettingModalPage', () => {
  let component: SettingModalPage;
  let fixture: ComponentFixture<SettingModalPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(SettingModalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
