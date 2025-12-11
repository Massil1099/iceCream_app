import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EmptyFlavorPage } from './empty-flavor.page';

describe('EmptyFlavorPage', () => {
  let component: EmptyFlavorPage;
  let fixture: ComponentFixture<EmptyFlavorPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(EmptyFlavorPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
