import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Plan } from 'src/app/resources/domain/Plan';
import { PlanoService } from 'src/app/resources/services/plano.service';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-plano-card',
  templateUrl: './plano-card.component.html',
  styleUrls: ['./plano-card.component.scss'],
  encapsulation: ViewEncapsulation.None,
  providers: [MessageService],
})
export class PlanoCardComponent implements OnInit {
  plans!: Plan[];
  selectedPlan!: Plan;
  visible: boolean = false;
  visible2: boolean = false;
  observa: Object | undefined;
  idSelected: number | undefined;

  dialogDeletarPlano(id : number){
    console.log(id)
    this.idSelected = id;
    this.visible2 = true;  
  }
  constructor(
    private service: PlanoService,
    private messageService: MessageService
    ) {}

  ngOnInit(): void {
    this.service.getAllPlans().subscribe((resposta) => (this.plans = resposta));
  
  }

  public deletePlan(id = this.idSelected) {
    console.log("chegou aqui" +id)
    this.service
    .deletePlanById(id!)
    .subscribe((resposta) => (this.observa = resposta));
    
    this.messageService.add({
      key: 'bc',
      severity: 'success',
      summary: 'Sucesso',
      detail: 'Plano deletado com sucesso',
      sticky: true,
    });
//    this.service.getAllPlans().subscribe((resposta) => (this.plans = resposta));
    
  }
}
