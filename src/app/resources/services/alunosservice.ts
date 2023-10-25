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
       return this.http.get<Student[]>('api/student');
  }

  createAluno(student : Student) {
    return this.http.post('api/student', student)
  }

  findById(id : number) : Observable<Student> {

    return this.http.get<Student>("api/student/by-id?id="+id)
  }

};
