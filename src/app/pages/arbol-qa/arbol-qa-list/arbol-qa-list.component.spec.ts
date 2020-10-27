import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArbolQaListComponent } from './arbol-qa-list.component';

describe('ArbolQaListComponent', () => {
  let component: ArbolQaListComponent;
  let fixture: ComponentFixture<ArbolQaListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArbolQaListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArbolQaListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
