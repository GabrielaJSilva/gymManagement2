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
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
//import { TelaProfessoresComponent } from './views/tela-professores/tela-professores.component';
import { TableModule } from 'primeng/table';
import { CommonModule } from '@angular/common';
//import { ReactiveFormsModule } from '@angular/forms';
//import { MenuModule } from 'src/app/views/menu/menu.module';
import { AlunosService } from './resources/services/alunosservice';
//import { TelaDetalheAlunoComponent } from './views/tela-detalhe-aluno/tela-detalhe-aluno.component';
import { MenuModule } from "./views/menu/menu.module";
//import { MenuModule_1 as MenuModule } from "./views/menu/menu.module";


@NgModule({
    declarations: [
        AppComponent,
        LoginComponent,
       
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
