import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Templateform } from './templateform.component';

describe('Templateform', () => {
  let component: Templateform;
  let fixture: ComponentFixture<Templateform>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Templateform]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Templateform);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
