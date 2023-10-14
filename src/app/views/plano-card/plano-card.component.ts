import { Component, OnInit } from '@angular/core';
import { Plan } from 'src/app/resources/domain/Plan';
import { PlanoService } from 'src/app/resources/services/plano.service';

@Component({
  selector: 'app-plano-card',
  templateUrl: './plano-card.component.html',
  styleUrls: ['./plano-card.component.scss'],
})
export class PlanoCardComponent implements OnInit {
  plans?: Plan[];

  constructor(private service: PlanoService) {}

  ngOnInit() {
    this.service.getAllPlans().subscribe((resposta) => (this.plans = resposta));
  }

  public deletePlan(id: number) {
    console.log("Chegou aqui Component"+id)
    this.service.deletePlanById(id);
  }
}
