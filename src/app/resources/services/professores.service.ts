import { Injectable } from '@angular/core';
import { AddProfessor } from '../models/AddProfessor';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProfessoresService {
  
  constructor(private httpClient: HttpClient) {}
  public addProfessor(addProfessor: AddProfessor){
    return this.httpClient.post('http://manangment-gym-production.up.railway.app/teacher', addProfessor);
  }

}
