import { Component, OnInit, ViewEncapsulation  } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { AlertService } from 'src/app/resources/services/alert.service';
import { LoginService } from 'src/app/resources/services/login.service';
import { Alunos } from 'src/app/resources/domain/alunos';
import { AlunosService } from 'src/app/resources/services/alunosservice';

@Component({
  selector: 'app-tela-cadastro',
  templateUrl: './tela-cadastro.component.html',
  styleUrls: ['./tela-cadastro.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class TelaCadastroComponent implements OnInit{
  items: MenuItem[] = [];
  alunos!: Alunos [];
  requestLogin: any;
  checked: boolean = false;
  selectedAluno!: Alunos;

  constructor(
    private loginService: LoginService,
    private alertService: AlertService,
    private alunosService: AlunosService,
//    private router: Router,
    ) {}
  ngOnInit() {} 

}
