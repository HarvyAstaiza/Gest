import { Component } from '@angular/core';
import { Teachers } from '../../pages/home-teachers/teacher';
import { TeachersService } from '../../pages/home-teachers/teachers.service';


@Component({
  selector: 'app-home-teachers',
  templateUrl: './home-teachers.component.html',
  styleUrls: ['./home-teachers.component.css']
})
export class HomeTeachersComponent {
  Teachers: Teachers[] = [];

  constructor(private teachersService: TeachersService) {}

  ngOnInit(): void {
    this.teachersService.getDocentes().subscribe(data => {
      this.Teachers = data;
    });
  }
}
