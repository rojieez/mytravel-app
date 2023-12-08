import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PhilippinesPage } from './philippines.page';

describe('PhilippinesPage', () => {
  let component: PhilippinesPage;
  let fixture: ComponentFixture<PhilippinesPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(PhilippinesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
