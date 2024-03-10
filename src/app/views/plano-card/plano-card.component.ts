import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Plan } from 'src/app/resources/domain/Plan';
import { PlanoService } from 'src/app/resources/services/plano.service';
import { MessageService } from 'primeng/api';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-plano-card',
  templateUrl: './plano-card.component.html',
  styleUrls: ['./plano-card.component.scss'],
  encapsulation: ViewEncapsulation.None,
  providers: [MessageService],
})
export class PlanoCardComponent implements OnInit {
  //[x: string]: Object;
  plans!: Plan[];
  selectedPlan!: Plan;
  visible: boolean = false;
  visible2: boolean = false;
  observa: Object | undefined;
  //observa: Object | undefined;

  //observa?: Observable<any>;


  dialogDeletarPlano(){
    this.visible2 = true;
  }
  constructor(
    private service: PlanoService,
    private messageService: MessageService
    ) {}

  ngOnInit(): void {
    this.service.getAllPlans().subscribe((resposta) => (this.plans = resposta));
  }

  public deletePlan(id: number) {
    console.log("Chegou aqui Component"+id)
    this.service
    .deletePlanById(id)
    .subscribe((resposta) => (this.observa = resposta));
    //console.log('Olha o retorno tem httpStatusCode' + this['observa']);
    this.messageService.add({
      key: 'bc',
      severity: 'success',
      summary: 'Sucesso',
      detail: 'Plano deletado com sucesso',
      sticky: true,
    });
  }
}
