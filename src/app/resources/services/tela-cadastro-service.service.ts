import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Student } from '../domain/student';

@Injectable({
  providedIn: 'root'
})


export class TelaCadastroServiceService {


  constructor(private http : HttpClient) { }

  public createStudent(student : Student){
    console.log("Student no service "+student.name)
    return this.http.post(environment.production ? environment.backend + 'student' : 'api/student',student);
  }
}
