import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PruebaFlexComponent } from './prueba-flex.component';

describe('PruebaFlexComponent', () => {
  let component: PruebaFlexComponent;
  let fixture: ComponentFixture<PruebaFlexComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PruebaFlexComponent]
    });
    fixture = TestBed.createComponent(PruebaFlexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
