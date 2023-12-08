import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IndonesiaPage } from './indonesia.page';

describe('IndonesiaPage', () => {
  let component: IndonesiaPage;
  let fixture: ComponentFixture<IndonesiaPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(IndonesiaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
