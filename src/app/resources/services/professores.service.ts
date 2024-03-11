import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap} from 'rxjs';
import { environment } from 'src/environments/environment';
import { Professores } from '../domain/professores';
import { AddProfessor } from '../models/AddProfessor';

@Injectable({
  providedIn: 'root'
})
export class ProfessoresService {

  constructor(private http: HttpClient) {}

  public getAllTeachers() : Observable<Professores[]>{
    return this.http.get<Professores[]>(environment.production ? environment.backend + 'teacher' : 'api/teacher');
  }
  public deletProfessorById(id: number){
    return this.http.delete<any>(environment.production ? environment.backend + 'teacher?id='+id : 'api/teacher?id='+id).pipe(tap(response =>
      response))
  }
  public addNewProfessor(addProfessor : AddProfessor){
    return this.http.post(environment.production ? environment.backend + 'teacher' : 'api/teacher',addProfessor);
    }
      
}
