import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private http:HttpClient) { }

  addstudent(student:any){
    return this.http.post("http://localhost:3000/students",student);
  }

  getAllStudents(){
    return this.http.get<any[]>("http://localhost:3000/students")
  }
}
