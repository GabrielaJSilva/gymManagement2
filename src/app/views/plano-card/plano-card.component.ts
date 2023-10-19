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
  plans?: Plan[];
  visible: boolean = false;
  visible2: boolean = false;
  dialogDeletarPlano(): void {
    this.visible2 = true;
  }
  constructor(
    private service: PlanoService,
    private messageService: MessageService

    ) {}

  ngOnInit() {
    this.service.getAllPlans().subscribe((resposta) => (this.plans = resposta));
  }

  public deletePlan(id: number) {
    console.log("Chegou aqui Component"+id)
    this.service.deletePlanById(id);

    this.messageService.add({
      key: 'bc',
      severity: 'success',
      summary: 'Successo',
      detail: 'Plano deletado com sucesso',
      sticky: true,
    });
  }
}
