import { Component } from '@angular/core';
import { Alunos } from 'src/app/resources/domain/alunos';
import { AlunosService } from 'src/app/resources/services/alunosservice';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tela-alunos',
  templateUrl: './tela-alunos.component.html',
  styleUrls: ['./tela-alunos.component.scss']
})
export class TelaAlunosComponent {
  alunos!: Alunos [];
  selectedAluno!: Alunos;
  visible: boolean = false;
  value1: string | undefined;
  deletarAluno(){
    this.visible = true;
  }
  constructor(
    private alunosService: AlunosService,
    private router: Router,
    ) {}
  ngOnInit() {
    
    this.alunosService.getAlunosMini().then((data: Alunos[]) => {
      this.alunos = data;
      
    });
  
}

}

