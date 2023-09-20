import { Component } from '@angular/core';
import { Students } from './students';
import { StudentsService } from '../../service/students.service';

@Component({
  selector: 'app-home-students',
  templateUrl: './home-students.component.html',
  styleUrls: ['./home-students.component.css']
})
export class HomeStudentsComponent {
  Students: Students[] = [];

  constructor(private studentsService: StudentsService) {}

  ngOnInit(): void {
    this.studentsService.getEstudiantes().subscribe(data => {
      this.Students = data;
    });
  }
}
