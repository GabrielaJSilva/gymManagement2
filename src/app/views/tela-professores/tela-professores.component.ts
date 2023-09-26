import { Component, OnInit, ViewEncapsulation  } from '@angular/core';

@Component({
  selector: 'app-tela-professores',
  templateUrl: './tela-professores.component.html',
  styleUrls: ['./tela-professores.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class TelaProfessoresComponent implements OnInit {
  visible: boolean = false;
  cadastrarProf(){
    this.visible = true;
  }
  constructor(
    ) {}
  ngOnInit() {} 
  //Não esquecer de iniciar o metodo get professor
  //this.getProfessores();
}
//cadastrarProf()
//escrever aqui o metodo get professores
//getProfessores(){
//  this.professoresService...
//}
