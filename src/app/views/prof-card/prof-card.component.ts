import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Professores } from 'src/app/resources/domain/professores';
import { AddProfessor } from 'src/app/resources/models/AddProfessor';
import { ProfessoresService } from 'src/app/resources/services/professores.service';
import { MessageService } from 'primeng/api';
import { Observable } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-prof-card',
  templateUrl: './prof-card.component.html',
  styleUrls: ['./prof-card.component.scss'],
  encapsulation: ViewEncapsulation.None,
  providers: [MessageService],
})
export class ProfCardComponent implements OnInit {
  professores!: Professores[];
  selectedProfessor!: Professores;
  visible: boolean = false;
  visible1: boolean = false;
  public addProfessor: AddProfessor | undefined;

  observa?: Observable<any>;

  //dialog para deletar professor visível
  dialogDeletarProf() {
    this.visible = true;
  }

  constructor(
    private professoresService: ProfessoresService,
    private messageService: MessageService
  ) {}
  ngOnInit(): void {
    this.addProfessor = new AddProfessor();
    this.professoresService
      .getAllTeachers()
      .subscribe((resposta) => (this.professores = resposta));
  }

  public exluirProf(id: number) {
    //console.log("Chegou aqui,.,,"+id)
    this.professoresService
      .deletProfessorById(id)
      .subscribe((resposta) => (this.observa = resposta));

    console.log('Olha o retorno tem httpStatusCode' + this.observa);

    this.messageService.add({
      key: 'bc',
      severity: 'success',
      summary: 'Sucesso',
      detail: 'Professor deletado com sucesso',
      sticky: true,
    });
  }
}
