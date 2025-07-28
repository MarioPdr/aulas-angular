import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Listausuarios } from './listausuarios.component';

describe('Listausuarios', () => {
  let component: Listausuarios;
  let fixture: ComponentFixture<Listausuarios>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Listausuarios]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Listausuarios);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
