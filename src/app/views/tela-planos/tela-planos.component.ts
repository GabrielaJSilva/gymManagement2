import { Component, OnInit, ViewEncapsulation  } from '@angular/core';
import { MessageService } from 'primeng/api';
@Component({
  selector: 'app-tela-planos',
  templateUrl: './tela-planos.component.html',
  styleUrls: ['./tela-planos.component.scss'],
  encapsulation: ViewEncapsulation.None,
  providers: [MessageService]
})
export class TelaPlanosComponent implements OnInit {
  visible: boolean = false;
  cadastrarPlano(){
    this.visible = true;
  }
  salvarAluno(){
    this.messageService.add({ key: 'bc', severity: 'success', summary: 'Success', detail: 'Plano adicionado com sucesso' });

  }
  constructor(private messageService: MessageService
    ) {}
  ngOnInit() {} 
  //Não esquecer de iniciar o metodo get professor
  //this.getProfessores();
}
