import { ComponentFixture, TestBed } from '@angular/core/testing';
import { JapanPage } from './japan.page';

describe('JapanPage', () => {
  let component: JapanPage;
  let fixture: ComponentFixture<JapanPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(JapanPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
