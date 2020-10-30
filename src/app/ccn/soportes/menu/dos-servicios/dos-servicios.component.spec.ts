import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DosServiciosComponent } from './dos-servicios.component';

describe('DosServiciosComponent', () => {
  let component: DosServiciosComponent;
  let fixture: ComponentFixture<DosServiciosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DosServiciosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DosServiciosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
