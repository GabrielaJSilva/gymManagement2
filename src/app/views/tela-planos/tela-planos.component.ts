import { Component, OnInit, ViewEncapsulation  } from '@angular/core';

@Component({
  selector: 'app-tela-planos',
  templateUrl: './tela-planos.component.html',
  styleUrls: ['./tela-planos.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class TelaPlanosComponent implements OnInit {
  visible: boolean = false;
  cadastrarPlano(){
    this.visible = true;
  }
  constructor(
    ) {}
  ngOnInit() {} 
  //Não esquecer de iniciar o metodo get professor
  //this.getProfessores();
}
