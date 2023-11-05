import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms';
import { AuthenticationService } from './services/authentication.service';

@NgModule({
  declarations: [
    
  ],
  imports: [CommonModule, FormsModule],
  providers: [AuthenticationService],
})
export class LoginModule { }
