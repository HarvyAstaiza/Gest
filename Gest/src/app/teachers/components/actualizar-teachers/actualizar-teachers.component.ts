import { Component, OnInit } from '@angular/core';
import { Teachers } from '../../pages/home-teachers/teacher';
import { TeachersService } from '../../service/teachers.service';
import { ObjectId } from 'mongodb';

@Component({
  selector: 'app-actualizar-teachers',
  templateUrl: './actualizar-teachers.component.html',
  styleUrls: ['./actualizar-teachers.component.css']
})
export class ActualizarTeachersComponent {
  teacher: Teachers = {
    code_Teacher:'',
    identification: '',
    name: '',
    
  };
   
  constructor(private teachersService: TeachersService) {

    
  } // Inyecta tu servicio de API

  
  ngOnInit() {
   
  }
  
  
}

