import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArbolQaFormComponent } from './arbol-qa-form.component';

describe('ArbolQaFormComponent', () => {
  let component: ArbolQaFormComponent;
  let fixture: ComponentFixture<ArbolQaFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArbolQaFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArbolQaFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
