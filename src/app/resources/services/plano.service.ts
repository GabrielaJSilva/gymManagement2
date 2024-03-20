import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Plan } from '../domain/Plan';
import { AddPlan } from '../models/AddPlan';

@Injectable({
  providedIn: 'root'
})
export class PlanoService {

  constructor(private http : HttpClient) { }


  public getAllPlans() : Observable<Plan[]>{
    const tokenString = localStorage.getItem('access_token') || '{}'
    const token = JSON.parse(tokenString)
    const headers = {
          'Authorization': 'Bearer '+token.access_token
      }
    return this.http.get<Plan[]>(environment.production ? environment.backend + 'plan' : 'api/plan', { headers });
  }

  public deletePlanById(id : number){
    const tokenString = localStorage.getItem('access_token') || '{}'
    const token = JSON.parse(tokenString)
    const headers = {
          'Authorization': 'Bearer '+token.access_token
      }
    return this.http.delete<any>(environment.production ? environment.backend + 'plan?id='+id : 'api/plan?id'+id, { headers });
  }
  public addNewPlan(addPlan : AddPlan){
    const tokenString = localStorage.getItem('access_token') || '{}'
    const token = JSON.parse(tokenString)
    const headers = {
          'Authorization': 'Bearer '+token.access_token
      }
  return this.http.post(environment.production ? environment.backend + 'plan' : 'api/plan',addPlan, { headers });
  }
  }
