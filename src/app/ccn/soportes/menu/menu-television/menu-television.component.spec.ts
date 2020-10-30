import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuTelevisionComponent } from './menu-television.component';

describe('MenuTelevisionComponent', () => {
  let component: MenuTelevisionComponent;
  let fixture: ComponentFixture<MenuTelevisionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuTelevisionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuTelevisionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
