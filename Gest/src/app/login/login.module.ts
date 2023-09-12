import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './pages/login/login.component';
import { FormsModule } from '@angular/forms';
import { AuthenticationService } from './services/authentication.service';

@NgModule({
  declarations: [
    
  ],
  imports: [CommonModule, FormsModule],
  providers: [AuthenticationService],
})
export class LoginModule { }
