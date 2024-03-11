import { Component, OnInit, ViewEncapsulation  } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { PlanoService } from 'src/app/resources/services/plano.service';
@Component({
  selector: 'app-tela-planos',
  templateUrl: './tela-planos.component.html',
  styleUrls: ['./tela-planos.component.scss'],
  encapsulation: ViewEncapsulation.None,
  providers: [MessageService]
})
export class TelaPlanosComponent implements OnInit {
  
  visible: boolean = false;
  form!: FormGroup;
  
  cadastrarPlano(){
    this.visible = true;
  }
 
  constructor(private messageService: MessageService,
    private fb: FormBuilder, private service: PlanoService ) {}

  ngOnInit() { 
    this.form = this.fb.group({
      namePlan: [null, [Validators.required, Validators.minLength(3)]],
      valuePlan: [null, [Validators.required, Validators.minLength(3)]]
    });
  }
  salvarPlano(){
    console.log(this.form.value);
    if(this.form.valid){
      console.log('submit');
      this.service.addNewPlan(this.form.value).subscribe();
    }
    this.messageService.add({ key: 'bc', severity: 'success', summary: 'Sucesso', detail: 'Plano adicionado com sucesso' });
  }
}
