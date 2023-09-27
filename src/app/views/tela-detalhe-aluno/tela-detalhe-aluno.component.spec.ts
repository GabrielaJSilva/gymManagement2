import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TelaDetalheAlunoComponent } from './tela-detalhe-aluno.component';

describe('TelaDetalheAlunoComponent', () => {
  let component: TelaDetalheAlunoComponent;
  let fixture: ComponentFixture<TelaDetalheAlunoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TelaDetalheAlunoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TelaDetalheAlunoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
