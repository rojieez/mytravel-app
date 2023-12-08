import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SouthkoreaPage } from './southkorea.page';

describe('SouthkoreaPage', () => {
  let component: SouthkoreaPage;
  let fixture: ComponentFixture<SouthkoreaPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(SouthkoreaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
