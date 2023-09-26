import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { Router } from '@angular/router';
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class MenusComponent implements OnInit{
  items: MenuItem[] = [];
  constructor(
  private router: Router
  ) {}

  ngOnInit() {
    
    this.items = [

        {
            label: 'Início',   
            command: (event) => this.abrirDashboard(),       
        },
        {
            label: 'Professores',
            command: (event) => this.abrirProfessores(),         
        },
        {
            label: 'Planos',   
            command: (event) => this.abrirPlanos(), 
        },
        {
          label: 'Cadastrar Aluno', 
          command: (event) => this.abrirCadastro(),           
        },
        {
          label: 'Financeiro', 
          command: (event) => this.abrirFinanceiro(),          
        },
        {
            separator: true      
        },

    ];

  }
    abrirDashboard(){
      this.router.navigateByUrl('dashboard');
    }
    abrirProfessores(){
      this.router.navigateByUrl('dashboard/tela-professores');
    }
    abrirPlanos(){
      this.router.navigateByUrl('dashboard/tela-planos');
    }

    abrirCadastro(){
      this.router.navigateByUrl('dashboard/tela-cadastro');
    }
    abrirFinanceiro(){
      this.router.navigateByUrl('dashboard/tela-financeiro');
    }
    deslogar(){
      this.router.navigate(['login']);
    }

}
