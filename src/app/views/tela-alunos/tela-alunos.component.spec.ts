import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TelaAlunosComponent } from './tela-alunos.component';

describe('TelaAlunosComponent', () => {
  let component: TelaAlunosComponent;
  let fixture: ComponentFixture<TelaAlunosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TelaAlunosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TelaAlunosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
