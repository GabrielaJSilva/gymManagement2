import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Professores } from 'src/app/resources/domain/professores';
import { AddProfessor } from 'src/app/resources/models/AddProfessor';
import { ProfessoresService } from 'src/app/resources/services/professores.service';
import { MessageService } from 'primeng/api';
@Component({
  selector: 'app-tela-professores',
  templateUrl: './tela-professores.component.html',
  styleUrls: ['./tela-professores.component.scss'],
  encapsulation: ViewEncapsulation.None,
  providers: [MessageService]
})
export class TelaProfessoresComponent implements OnInit {
  visible: boolean = false;
  visible1: boolean = false;
  professores!: Professores[];
  selectedProfessor!: Professores;
  public addProfessor: AddProfessor = new AddProfessor();

  cadastrarProf() {
    this.visible = true;
  }
  deletarProf() {
    this.visible1 = true;
  }
  salvarProfessor(){
    this.messageService.add({ key: 'bc', severity: 'success', summary: 'Sucesso', detail: 'Professor adicionado com sucesso' });
  }
  constructor(private professoresService: ProfessoresService, private messageService: MessageService) {}
  ngOnInit(): void {
    this.addProfessor = new AddProfessor();
  }

  public doProf() {
    this.professoresService
      .addProfessor(this.addProfessor)
      .subscribe((resposta) => (this.addProfessor = resposta));
  }
}
