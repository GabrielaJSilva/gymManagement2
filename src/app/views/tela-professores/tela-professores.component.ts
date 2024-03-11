import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { ProfessoresService } from 'src/app/resources/services/professores.service';
@Component({
  selector: 'app-tela-professores',
  templateUrl: './tela-professores.component.html',
  styleUrls: ['./tela-professores.component.scss'],
  encapsulation: ViewEncapsulation.None,
  providers: [MessageService]
})
export class TelaProfessoresComponent implements OnInit {

  visible: boolean = false;
  visible1: boolean = false;
  form!: FormGroup;

  cadastrarProf() {
    this.visible = true;
  }
  deletarProf() {
    this.visible1 = true;
  }

  constructor(private professoresService: ProfessoresService, private messageService: MessageService,
    private fb: FormBuilder) {}
  ngOnInit() {
    this.form = this.fb.group({
      name: [null, [Validators.required, Validators.minLength(3)]],
      socialNetwork: [null, [Validators.required, Validators.minLength(3)]],
      numberPhone: [null, [Validators.required, Validators.minLength(3)]],

    });
  }
  salvarProfessor(){
    console.log(this.form.value);
    if(this.form.valid){ 
      console.log('submit');
      this.professoresService.addNewProfessor(this.form.value).subscribe();
    }
    this.messageService.add({ key: 'bc', severity: 'success', summary: 'Sucesso', detail: 'Professor adicionado com sucesso'});
  }
}
