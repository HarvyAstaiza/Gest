import { Component } from '@angular/core';
import { Teachers } from './teacher';
import { TeachersService } from './teachers.service';

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
