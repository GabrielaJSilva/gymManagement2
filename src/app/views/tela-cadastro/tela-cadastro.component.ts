import { Contacts } from './../../resources/domain/contacts';
import { Component, OnInit, ViewEncapsulation  } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { Alunos } from 'src/app/resources/domain/alunos';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TelaCadastroServiceService } from 'src/app/resources/services/tela-cadastro-service.service';
import { MessageService } from 'primeng/api';
import { Student } from 'src/app/resources/domain/student';



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
    private fb: FormBuilder,
    private service: TelaCadastroServiceService
    ) {}


    ngOnInit() {
      this.form = this.fb.group({
        student: this.fb.group({
          name: [null, [Validators.required, Validators.minLength(3)]],
          sexo: [null, [Validators.required, Validators.minLength(3)]]
        }),
        contact: this.fb.group({
          socialNetwork: [null, [Validators.required, Validators.minLength(3)]],
          numberPhone: [null, [Validators.required, Validators.minLength(3)]],
          email: [null, [Validators.required, Validators.minLength(3)]]
        })
      });
    }

  saveStudent(){

    if(this.form.value){

      const formData = this.form.value;
      const student = formData.student;
      const contact = formData.contact;

      student.contact = contact;
      console.log("Student no component "+student.name)
      console.log("Student no component "+student.sexo)

      console.log("Form Data "+formData.student)
      this.service.createStudent(student);
   }
    this.messageService.add({ key: 'bc', severity: 'success', summary: 'Sucesso', detail: 'Student adicionado com sucesso' });
  }

}
