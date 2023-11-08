import { Component, Input } from '@angular/core';


interface SideNavToggle{
  screenWidth:number;
  collapsed:boolean;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  isSideNavCollapsed = false;
  screenWidth = 0;
   @Input() userId: string = '';
  onToggleSideNav(data:SideNavToggle):void{
  this.screenWidth = data.screenWidth;
  this.isSideNavCollapsed =data.collapsed;
  }
}
