import { Component, OnInit, ViewEncapsulation  } from '@angular/core';
import { Professores } from 'src/app/resources/domain/professores';
import { AddProfessor } from 'src/app/resources/models/AddProfessor';
import { ProfessoresService } from 'src/app/resources/services/professores.service';
@Component({
  selector: 'app-prof-card',
  templateUrl: './prof-card.component.html',
  styleUrls: ['./prof-card.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class ProfCardComponent implements OnInit {
  professores!: Professores [];
  selectedProfessor!: Professores;
  visible: boolean = false;
  visible1: boolean = false;
  public addProfessor: AddProfessor | undefined;
  deletarProf(){
    this.visible = true;
  }
  constructor(
    private professoresService: ProfessoresService) {}
  ngOnInit(): void {
     this.addProfessor = new AddProfessor();
     //this.professores = this.professoresService.getProfessoresData();
     this.professoresService.getAllTeachers().subscribe(resposta => this.professores = resposta)
     };

}

