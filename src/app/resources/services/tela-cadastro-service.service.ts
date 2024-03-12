import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Student } from '../domain/student';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { StudentInputDTO } from '../models/StudentInputDTO';

@Injectable({
  providedIn: 'root'
})


export class TelaCadastroServiceService {
  studentForCreate!: Student;

  constructor(private http : HttpClient) { }

  public createStudent(student : StudentInputDTO){
    console.log("Student no service "+student)
    return this.http.post<Student>(environment.production ? environment.backend + 'student' : 'api/student',student);
  }
}
