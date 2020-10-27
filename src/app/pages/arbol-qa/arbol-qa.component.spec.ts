import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArbolQaComponent } from './arbol-qa.component';

describe('ArbolQaComponent', () => {
  let component: ArbolQaComponent;
  let fixture: ComponentFixture<ArbolQaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArbolQaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArbolQaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
