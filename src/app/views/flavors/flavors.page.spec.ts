import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FlavorsPage } from './flavors.page';

describe('FlavorsPage', () => {
  let component: FlavorsPage;
  let fixture: ComponentFixture<FlavorsPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(FlavorsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
