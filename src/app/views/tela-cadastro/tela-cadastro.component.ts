import { Contacts } from './../../resources/domain/contacts';
import { Component, OnInit, ViewEncapsulation  } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { AlertService } from 'src/app/resources/services/alert.service';
import { LoginService } from 'src/app/resources/services/login.service';
import { Alunos } from 'src/app/resources/domain/alunos';
import { AlunosService } from 'src/app/resources/services/alunosservice';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TelaCadastroServiceService } from 'src/app/resources/services/tela-cadastro-service.service';
import { MessageService } from 'primeng/api';
import { Student } from 'src/app/resources/domain/student';
import { StudentInputDTO } from '../../resources/models/StudentInputDTO';


@Component({
  selector: 'app-tela-cadastro',
  templateUrl: './tela-cadastro.component.html',
  styleUrls: ['./tela-cadastro.component.scss'],
  encapsulation: ViewEncapsulation.None,
  providers: [MessageService]
})
export class TelaCadastroComponent implements OnInit{
  items: MenuItem[] = [];
  alunos!: Alunos [];
  requestLogin: any;
  checked: boolean = false;
  selectedAluno!: Alunos;
  form!: FormGroup;
  student!: Student;
  contact!: Contacts



  constructor(
    private messageService: MessageService,
    private loginService: LoginService,
    private alertService: AlertService,
    private alunosService: AlunosService,
    private fb: FormBuilder,
    private service: TelaCadastroServiceService
    ) {}
  ngOnInit() {
    this.form = this.fb.group({
      name: [null, [Validators.required, Validators.minLength(3)]],
      sexo: [null, [Validators.required, Validators.minLength(3)]],
      socialNetwork: [null, [Validators.required, Validators.minLength(3)]],
      numberPhone: [null, [Validators.required, Validators.minLength(3)]],
      email: [null, [Validators.required, Validators.minLength(3)]]




    });
  }

  saveStudent(){

    console.log("Value do form *******"+this.form.value);
    if(this.form.valid){
      console.log('submit');
      console.log("ALUNOOOOOOOOO######  "+this.form.value);
      this.service.createStudent(this.form.value);

    }
    this.messageService.add({ key: 'bc', severity: 'success', summary: 'Sucesso', detail: 'Student adicionado com sucesso' });
  }

}
