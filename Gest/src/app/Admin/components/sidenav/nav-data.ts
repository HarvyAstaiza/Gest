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
        icon:'bi bi-journal-bookmark-fill',
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
        routeLink:'/home/bibliography',
        icon:'bi bi-book',
        label:'Bibliografia',
        items:[
            {
            routeLink:'/home/bibliography/list',
            label:'Mis Bibliografias'
            },
            {
                routeLink:'/home/bibliography/create',
                label:'Crear Bibliografia'
            },
        ]
    },
    {
        routeLink:'/home/evaluations',
        icon:'bi bi-card-checklist',
        label:'Evaluacion',
        items:[
            {
            routeLink:'/home/evaluations/list',
            label:'Lanzar Evaluación'
            },
            {
                routeLink:'/home/bibliography/create',
                label:'Crear Evaluacion'
            },
        ]
    },
    {
        routeLink:'/home/evaluations',
        icon:'bi bi-folder-symlink',
        label:'Cibergrafia',
        items:[
            {
            routeLink:'/home/evaluations/list',
            label:'Lista de Cibergrafias'
            },
            {
                routeLink:'/home/bibliography/create',
                label:'Crear Cibergrafia'
            },
        ]
    },
    {
        routeLink:'/home/singup',
        icon:'bi bi-person-badge-fill',
        label:'Usuarios',
        items:[
            {
            routeLink:'/home/singup',
            label:'Registrar Usuarios'
            },
        ]
    },    
    
   
    
];