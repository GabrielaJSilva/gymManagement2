import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Student } from 'src/app/resources/domain/student';
import { AlunosService } from 'src/app/resources/services/alunosservice';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-detalhe-aluno',
  templateUrl: './tela-detalhe-aluno.component.html',
  styleUrls: ['./tela-detalhe-aluno.component.scss'],
  providers: [MessageService]
})

export class TelaDetalheAlunoComponent implements OnInit{
  //private router: Router
  idAluno!: number
  student !: Student
  visible: boolean = false;

  dialogDeletarA() {
    this.visible = true;
  }
  deletarAluno(){
    this.messageService.add({ key: 'bc', severity: 'success', summary: 'Success', detail: 'Aluno deletado com sucesso' });
    //detelar aqui o aluno no backend e retornar para o dashboard
    ///this.router.navigate(['dashboard']);
  }
  constructor(private router : ActivatedRoute, private alunoService : AlunosService,
    private messageService: MessageService){}

  ngOnInit(){
   this.router.params.subscribe((objeto: any) => {
      this.idAluno = objeto.id
      this.alunoService.findById(this.idAluno).subscribe(resposta => this.student = resposta )

   })
  }

}
