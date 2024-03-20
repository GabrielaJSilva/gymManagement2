import { Injectable } from '@angular/core';
import { RequestLogin } from '../models/RequestLogin';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { ResponseLogin } from '../models/ResponseLogin';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private httpClient: HttpClient, private authService: AuthService) { }

  public doLogin(requestLogin: RequestLogin){
    console.log("SERVICE ")
    const params = new HttpParams()
                  .set('username', requestLogin.username)
                  .set('password', requestLogin.password)
                  .set('grant_type', 'password')
                  console.log("PARAMETROS "+params.toString)

  const headers = {
                'Authorization': 'Basic ' + btoa('gym-managment-app:@321'),
                'Content-Type' : 'application/x-www-form-urlencoded',
                'Accept': '*/*'
                }

                console.log("HEARDER "+ headers.Authorization+ "  "+headers['Content-Type'] )

    return this.httpClient.post<any>('https://manangment-gym-production.up.railway.app/oauth/token', params, { headers });
  }
}
