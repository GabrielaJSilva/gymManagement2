import { Component, OnInit, ViewEncapsulation  } from '@angular/core';
import { Professores } from 'src/app/resources/domain/professores';
import { AddProfessor } from 'src/app/resources/models/AddProfessor';
import { ProfessoresService } from 'src/app/resources/services/professores.service';
@Component({
  selector: 'app-tela-professores',
  templateUrl: './tela-professores.component.html',
  styleUrls: ['./tela-professores.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class TelaProfessoresComponent implements OnInit {
  visible: boolean = false;
  visible1: boolean = false;
  professores!: Professores [];
  selectedProfessor!: Professores;
  public addProfessor: AddProfessor = new AddProfessor;

  cadastrarProf(){
    this.visible = true;
  }
  deletarProf(){
    this.visible1 = true;
  }
  constructor(
    private professoresService: ProfessoresService,

    ) {}
  ngOnInit(): void { 
    this.addProfessor = new AddProfessor();
}
  //Não esquecer de iniciar o metodo get professor
  //this.getProfessores();

public doProf(): void{
  //para ver o objeto no console
  //console.log(this.addProfessor);

  //fazendo a chamada no serviço
  this.professoresService.addProfessor(this.addProfessor)
}}

//getProfessores(){
//  this.professoresService...
//}
