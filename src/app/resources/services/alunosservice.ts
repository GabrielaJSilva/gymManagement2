import { Injectable } from '@angular/core';
import { Student } from '../domain/student';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
@Injectable()

export class AlunosService {

  constructor( private http :  HttpClient) {
   }

  getAllStudent() : Observable<Student[]> {
    const tokenString = localStorage.getItem('access_token') || '{}'
    const token = JSON.parse(tokenString)
const headers = {
  'Authorization': 'Bearer '+token.access_token
}

    return this.http.get<Student[]>(environment.production ? environment.backend + 'student' : 'api/student', { headers } );
  }

  createAluno(student : Student) {
    const tokenString = localStorage.getItem('access_token') || '{}'
    const token = JSON.parse(tokenString)
const headers = {
  'Authorization': 'Bearer '+token.access_token
}
    return this.http.post('api/student', student, { headers })
  }

  findById(id : number) : Observable<Student> {
    const tokenString = localStorage.getItem('access_token') || '{}'
    const token = JSON.parse(tokenString)
    const headers = {
          'Authorization': 'Bearer '+token.access_token
      }
    return this.http.get<Student>(environment.production ? environment.backend + "student/by-id?id="+id : "api/student/by-id?id="+id, { headers })
  }

};
