import { ObjectId } from "mongodb";

export interface Courses{
    _id?:ObjectId, 
    Codigo_Asignatura:String,
    Nombre:String
    Jornada:String,
    Semestre:String,
    Tipo_Materia:String,
}