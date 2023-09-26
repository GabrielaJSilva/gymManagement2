import { Component, ViewEncapsulation  } from '@angular/core';
import { Professores } from 'src/app/resources/domain/professores';
import { ProfessoresService } from 'src/app/resources/services/professores.service';
@Component({
  selector: 'app-prof-card',
  templateUrl: './prof-card.component.html',
  styleUrls: ['./prof-card.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class ProfCardComponent {
  professores!: Professores [];
  selectedProfessor!: Professores;
  constructor(
    private professoresService: ProfessoresService,
 //   private router: Router,
    ) {}
  ngOnInit() {
    
     this.professores = this.professoresService.getProfessoresData();
      
     };
    
}

