import { Injectable } from '@angular/core';
import { AddProfessor } from '../models/AddProfessor';
import { HttpClient } from '@angular/common/http';
import { Professores } from '../domain/professores';
import { Observable, tap } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProfessoresService {

  constructor(private httpClient: HttpClient) {}

  public addProfessor(addProfessor: AddProfessor) : Observable<AddProfessor>{
    console.log("passou no service")
    return this.httpClient.post<AddProfessor>('api/teacher', addProfessor);
    //return this.httpClient.post<AddProfessor>(environment.production ? environment.backend + 'teacher' :'api/teacher', addProfessor);

  }

  public getAllTeachers() : Observable<Professores[]>{
    return this.httpClient.get<Professores[]>(environment.production ? environment.backend + 'teacher' : 'api/teacher');
  }

  public deletProfessorById(id: number){
    return this.httpClient.delete<any>(environment.production ? environment.backend + 'teacher?id='+id : 'api/teacher?id='+id).pipe(tap(response =>
      response))
  }

}
