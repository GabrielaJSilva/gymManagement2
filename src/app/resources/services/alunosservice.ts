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

<<<<<<< HEAD
    return this.http.get<Student>(environment.production ? environment.backend + "student/by-id?id=" +id: "api/student/by-id?id="+id)
=======
    return this.http.get<Student>("api/student/by-id?id="+id)
>>>>>>> f0c8fbcb51326c4fb086ff63aa89baeb1b18451a
  }

};
