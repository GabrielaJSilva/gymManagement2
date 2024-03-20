import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RequestLogin } from 'src/app/resources/models/RequestLogin';
import { AlertService } from 'src/app/resources/services/alert.service';
import { LoginService } from 'src/app/resources/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  public requestLogin!: RequestLogin;

  constructor(
    private loginService: LoginService,
    private alertService: AlertService,
    private router: Router,
    ) {}

    username!: string;
    password!: string;


onSubmit(){
console.log(`User : ${this.username}, Pass: ${this.password}`)
this.requestLogin = new RequestLogin();
this.requestLogin.username =  this.username;
this.requestLogin.password = this.password;

this.loginService.doLogin(this.requestLogin).subscribe(response => {
const access_token =  JSON.stringify(response);
console.log("ACCES "+access_token)
localStorage.setItem('access_token', access_token)
  this.router.navigate(['dashboard'])
}, errorResponse => {
  console.log("Erro ao logar")
})


}

 // ngOnInit(): void {
    //this.requestLogin = new RequestLogin();
 // }
public doLogin(): void{
 // this.loginService.doLogin(this.requestLogin).subscribe(
    //(data) => {
    //this.router.navigate(['dashboard'])

   // },
   // () => {
    //  this.router.navigate(['dashboard'])
    //this.alertService.error('', httperror.error.message);
  //});
}
}
