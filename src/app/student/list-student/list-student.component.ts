import { Component } from '@angular/core';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-list-student',
  templateUrl: './list-student.component.html',
  styleUrl: './list-student.component.css'
})
export class ListStudentComponent {
  students:any[]=[];
  constructor(private service: StudentService){
    service.getAllStudents().subscribe(data=>{
      this.students=data;
    })
  }

  getBackgroundColor(){
    if(Math.random()>0.5){
      return "#ccffff";
    }else{
      return "#ffccff"
    }
  }

}
