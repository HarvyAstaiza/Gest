import { INavbarData } from "./helper";

export const navbarData : INavbarData[] = [
    {
    routeLink:'/home/dashboard',
    icon:'bi bi-speedometer2',
    label:'Dashboard',
    },
    {
        routeLink:'/home/teachers',
        icon:'bi bi-person-workspace',
        label:'Docentes',
        items:[
            {
            routeLink:'/home/teachers/list',
            label:'Listar Docentes'
            },
            {
                routeLink:'/home/teachers/create',
                label:'Crear Docentes'
            }
    ]
    },
    {
        routeLink:'/home/students',
        icon:'bi bi-universal-access',
        label:'Estudiantes',
    },
    {
        routeLink:'/home/courses',
        icon:'bi bi-book',
        label:'Materias',
    },
    {
        routeLink:'/home/evaluations',
        icon:'bi bi-card-checklist',
        label:'Evaluacion',
    },
    
    {
        routeLink:'/login',
        icon:'bi bi-box-arrow-in-right',
        label:'Cerrar Sesion',

    },
    
];