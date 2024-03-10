import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Plan } from '../domain/Plan';

@Injectable({
  providedIn: 'root'
})
export class PlanoService {

  constructor(private http : HttpClient) { }


  public getAllPlans() : Observable<Plan[]>{
    return this.http.get<Plan[]>(environment.production ? environment.backend + 'plan' : 'api/plan');
  }

  public deletePlanById(id : number){
    return this.http.delete<any>(environment.production ? environment.backend + 'plan?id='+id : 'api/plan?id'+id);
  }

  }