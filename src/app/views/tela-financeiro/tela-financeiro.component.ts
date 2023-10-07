import { Component, OnInit, ViewEncapsulation  } from '@angular/core';
import { Alunos } from 'src/app/resources/domain/alunos';
import { AlunosService } from 'src/app/resources/services/alunosservice';

@Component({
  selector: 'app-tela-financeiro',
  templateUrl: './tela-financeiro.component.html',
  styleUrls: ['./tela-financeiro.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class TelaFinanceiroComponent implements OnInit{
  alunos!: Alunos [];
  selectedAluno!: Alunos;
  visible: boolean = false;
  date: Date | undefined;
  value: string | undefined;

  constructor(
    private alunosService: AlunosService,
    ) {}
  ngOnInit() {
    this.alunosService.getAlunosMini().then((data: Alunos[]) => {
      this.alunos = data;
    

    });
  } 

}
