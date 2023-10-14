import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Plan } from '../domain/Plan';

@Injectable({
  providedIn: 'root'
})
export class PlanoService {

  constructor(private http : HttpClient) { }


  public getAllPlans() : Observable<Plan[]>{
    return this.http.get<Plan[]>('api/plan');
  }

  public deletePlanById(id : number){
    return this.http.delete('api/plan?id'+id)
  }

  }


