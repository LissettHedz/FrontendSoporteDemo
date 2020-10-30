import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuSoportesComponent } from './menu-soportes.component';

describe('MenuSoportesComponent', () => {
  let component: MenuSoportesComponent;
  let fixture: ComponentFixture<MenuSoportesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuSoportesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuSoportesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
