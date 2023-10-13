import { Injectable } from '@angular/core';
import { AddProfessor } from '../models/AddProfessor';
import { HttpClient } from '@angular/common/http';
import { Professores } from '../domain/professores';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProfessoresService {

  constructor(private httpClient: HttpClient) {}

  public addProfessor(addProfessor: AddProfessor) : Observable<AddProfessor>{
    console.log("passou no service")


    return this.httpClient.post<AddProfessor>('api/teacher', addProfessor);
  }

  public getAllTeachers() : Observable<Professores[]>{
    return this.httpClient.get<Professores[]>('api/teacher');
  }


}
