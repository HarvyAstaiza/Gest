import { Component } from '@angular/core';
import { Teachers } from '../../pages/home-teachers/teacher';
import { TeachersService } from '../../pages/home-teachers/teachers.service';

@Component({
  selector: 'app-listar-teachers',
  templateUrl: './listar-teachers.component.html',
  styleUrls: ['./listar-teachers.component.css']
})
export class ListarTeachersComponent {
  Teachers: Teachers[] = [];

  constructor(private teachersService: TeachersService) {}

  ngOnInit(): void {
    this.teachersService.getDocentes().subscribe(data => {
      this.Teachers = data;
    });
  }
}
