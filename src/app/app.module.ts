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
import { MenuModule } from 'src/app/views/menu/menu.module';
//import { TelaCadastroComponent } from './views/tela-cadastro/tela-cadastro.component';
//import { TelaFinanceiroComponent } from './views/tela-financeiro/tela-financeiro.component';
//import { TelaPlanosComponent } from './views/tela-planos/tela-planos.component';
//import { TelaAlunosComponent } from './views/tela-alunos/tela-alunos.component';
//import { MenuComponent } from './views/menu/menu.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
//    TelaCadastroComponent,
//    TelaFinanceiroComponent,
 //   TelaPlanosComponent,
 //   TelaProfessoresComponent,
//   TelaAlunosComponent,
//    MenuComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    CardModule,
    HttpClientModule,
    InputTextModule,
    ButtonModule,
    AppRoutingModule,
    TableModule,
    CommonModule,
 //   MenuModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
