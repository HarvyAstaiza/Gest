import { Component, EventEmitter, HostListener, OnInit, Output, Input } from '@angular/core';
import { navbarData } from './nav-data';
import { animate, keyframes, style, transition, trigger } from '@angular/animations';
import { INavbarData } from './helper';
import { AuthenticationService } from '../../../login/services/authentication.service';


interface SideNavToggle{
  screenWidth:number;
  collapsed:boolean;
}

@Component({
  selector: "app-sidenav",
  templateUrl: "./sidenav.component.html",
  styleUrls: ["./sidenav.component.css"],
  animations: [
    trigger("fadeInOut", [
      transition(":enter", [
        style({ opacity: 0 }),
        animate("350ms", style({ opacity: 1 })),
      ]),
      transition(":leave", [
        style({ opacity: 1 }),
        animate("350ms", style({ opacity: 0 })),
      ]),
    ]),
    trigger("rotate", [
      transition(":enter", [
        animate("1000ms",
        keyframes([
          style({ transform: "rotate(0deg)", offset:'0' }),
          style({ transform: "rotate(2turn)", offset:'1' })
        ])
        ),
          ])
          
      ]),
    ],
})
export class SidenavComponent implements OnInit {
  selectedItem: string = "";
  @Output() onToggleSideNav: EventEmitter<SideNavToggle> = new EventEmitter();
  collapsed = false;
  screenWidth = 0;
  navData = navbarData;
  multiple:boolean=false;
  isAdmin: boolean=false;
  userId: string;
  userRol:String;
  constructor(private authenticationService: AuthenticationService) {
    this.userId = this.authenticationService.getUserId();
    this.userRol =this.authenticationService.getUserRol();
    
  }

  @HostListener("window:resize", ["$event"])
  onResize(event: any) {
    this.screenWidth = window.innerWidth;
    if (this.screenWidth <= 768) {
      this.collapsed = false;
      this.onToggleSideNav.emit({
        collapsed: this.collapsed,
        screenWidth: this.screenWidth,
      });
    }
  }
  ngOnInit(): void {
   
    this.screenWidth = window.innerWidth;
    this.userId = this.authenticationService.getUserId();
    this.userRol = this.authenticationService.getUserRol();
    this.isAdmin = this.userRol === 'Administrador';
   // Verificar si es docente.
    
  }
  toggleCollapse(): void {
    this.collapsed = !this.collapsed;
    this.onToggleSideNav.emit({
      collapsed: this.collapsed,
      screenWidth: this.screenWidth,
    
    });
    console.log(this.userId)  
  }
  closeSidenav(): void {
    this.collapsed = false;
    this.onToggleSideNav.emit({
      collapsed: this.collapsed,
      screenWidth: this.screenWidth,
    });
  }
  handleClick(item:INavbarData):void{
  if(!this.multiple){
    for(let modelItem of this.navData){
      if(item !== modelItem && modelItem.expanded){
        modelItem.expanded=false;
      }
    }
  }
  item.expanded =!item.expanded

  }
  getTabsForUserRole(): INavbarData[] {
    if (this.isAdmin) {
      // Si es administrador, muestra estas pestañas
      return this.navData.filter(item =>
        ['Dashboard', 'Docentes', 'Estudiantes', 'Materias', 'Usuarios', 'Cerrar Sesion'].includes(item.label)
      );
    } else {
      // Para otros roles, muestra pestañas específicas para esos roles
      // Puedes ajustar esta lógica dependiendo de los roles y las pestañas que correspondan a cada uno
      return this.navData.filter(item =>
        ['Dashboard', 'Materias',  'Bibliografia', 'Evaluacion','Cibergrafia','Cerrar Sesion'].includes(item.label)
      );
    }
  }
  
}
