import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Student } from 'src/app/resources/domain/student';
import { AlunosService } from 'src/app/resources/services/alunosservice';

@Component({
  selector: 'app-detalhe-aluno',
  templateUrl: './detalhe-aluno.component.html',
  styleUrls: ['./detalhe-aluno.component.scss']
})
export class DetalheAlunoComponent  implements OnInit{

  idAluno!: number
  student !: Student
  visible: boolean = false;
  

  deletarAluno() {
    this.visible = true;
  }
  constructor(private router : ActivatedRoute, private alunoService : AlunosService){}

  ngOnInit(){
   this.router.params.subscribe((objeto: any) => {
      this.idAluno = objeto.id
      this.alunoService.findById(this.idAluno).subscribe(resposta => this.student = resposta )

   })
  }

}
