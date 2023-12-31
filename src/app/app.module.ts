import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardModule } from 'primeng/card';
import { LoginComponent } from './views/login/login.component';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { FormsModule } from '@angular/forms';
//import { TelaProfessoresComponent } from './views/tela-professores/tela-professores.component';
import { TableModule } from 'primeng/table';
import { CommonModule } from '@angular/common';
//import { MenuModule } from 'src/app/views/menu/menu.module';
import { AlunosService } from './resources/services/alunosservice';
//import { TelaDetalheAlunoComponent } from './views/tela-detalhe-aluno/tela-detalhe-aluno.component';
import { MenuModule } from "./views/menu/menu.module";
//import { MenuModule_1 as MenuModule } from "./views/menu/menu.module";



//import { TelaDetalheAlunoComponent } from './views/tela-detalhe-aluno/tela-detalhe-aluno.component';
//import { PlanoCardComponent } from './views/plano-card/plano-card.component';
//import { ProfCardComponent } from './views/prof-card/prof-card.component';
//import { TelaCadastroComponent } from './views/tela-cadastro/tela-cadastro.component';
//import { TelaFinanceiroComponent } from './views/tela-financeiro/tela-financeiro.component';
//import { TelaPlanosComponent } from './views/tela-planos/tela-planos.component';
//import { TelaAlunosComponent } from './views/tela-alunos/tela-alunos.component';
//import { MenuComponent } from './views/menu/menu.component';

@NgModule({
    declarations: [
        AppComponent,
        LoginComponent,
        //TelaDetalheAlunoComponent,
        //   TelaDetalheAlunoComponent,
        //    PlanoCardComponent,
        //    ProfCardComponent,
        //    TelaCadastroComponent,
        //    TelaFinanceiroComponent,
        //   TelaPlanosComponent,
        //   TelaProfessoresComponent,
        //   TelaAlunosComponent,
        //    MenuComponent
    ],
    providers: [
        AlunosService
    ],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        HttpClientModule,
        BrowserAnimationsModule,
        FormsModule,
        CardModule,
        InputTextModule,
        ButtonModule,
        AppRoutingModule,
        TableModule,
        CommonModule,
        MenuModule
    ]
})
export class AppModule { }
