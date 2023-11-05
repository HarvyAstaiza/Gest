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
            label:'Lista Docentes'
            },
            {
                routeLink:'/home/teachers/create',
                label:'Crear Docente'
            },
    ]
    },
    {
        routeLink:'/home/students',
        icon:'bi bi-universal-access',
        label:'Estudiantes',
        items:[
            {
            routeLink:'/home/students/list',
            label:'Lista Estudiantes'
            },
            {
                routeLink:'/home/students/create',
                label:'Crear Estudiante'
            },
        ]
    },
    {
        routeLink:'/home/courses',
        icon:'bi bi-book',
        label:'Materias',
        items:[
            {
            routeLink:'/home/courses/list',
            label:'Lista Materia'
            },
            {
                routeLink:'/home/courses/create',
                label:'Crear Materia'
            },
        ]
    },
    {
        routeLink:'/home/evaluations',
        icon:'bi bi-card-checklist',
        label:'Evaluacion',
    },
    {
        routeLink:'/home/user',
        icon:'bi bi-book',
        label:'Usuarios',
        items:[
            {
            routeLink:'/home/usuarios/list',
            label:'Lista Materia'
            },
            {
                routeLink:'/home/usuarios/create',
                label:'Crear Materia'
            },
        ]
    },    
    
    {
        routeLink:'/login',
        icon:'bi bi-box-arrow-in-right',
        label:'Cerrar Sesion',

    },
    
];