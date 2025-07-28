import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Usuariosdetalhes } from './usuariosdetalhes.component';

describe('Usuariosdetalhes', () => {
  let component: Usuariosdetalhes;
  let fixture: ComponentFixture<Usuariosdetalhes>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Usuariosdetalhes]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Usuariosdetalhes);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
