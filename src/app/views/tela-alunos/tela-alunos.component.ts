import { Component } from '@angular/core';
import { Alunos } from 'src/app/resources/domain/alunos';
import { AlunosService } from 'src/app/resources/services/alunosservice';
import { Router } from '@angular/router';
import { Student } from '../../resources/domain/student';

@Component({
  selector: 'app-tela-alunos',
  templateUrl: './tela-alunos.component.html',
  styleUrls: ['./tela-alunos.component.scss']
})
export class TelaAlunosComponent {
  //alunos!: Alunos [];
  students!: Student [];
  selectedAluno!: Alunos;
  visible: boolean = false;
  value1: string | undefined;
  student !: Student
  deletarAluno(){
    this.visible = true;
  }
  constructor(
    private service: AlunosService,
    private router: Router,
    ) {}
  ngOnInit() {

      this.service
                .getAllStudent()
                .subscribe( resposta => this.students = resposta );

    }

    abrirDetalheAluno(id : number){
      console.log("Checou aqui..."+id)
     this.router.navigate(['by-id', id]);
    }

    findById(id: number){
      return this.service.findById(id).subscribe(resposta => this.student = resposta)
    }


}



