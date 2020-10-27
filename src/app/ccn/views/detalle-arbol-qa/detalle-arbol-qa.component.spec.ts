import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleArbolQaComponent } from './detalle-arbol-qa.component';

describe('DetalleArbolQaComponent', () => {
  let component: DetalleArbolQaComponent;
  let fixture: ComponentFixture<DetalleArbolQaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetalleArbolQaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalleArbolQaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
