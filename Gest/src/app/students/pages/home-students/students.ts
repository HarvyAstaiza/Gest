import { ObjectId } from "mongodb";

export interface Students{
    _id?:ObjectId
    Identificacion:String,
    Nombre:String,
    Codigo:String,
    Pensum:String,
    Jornada:String,	
    Estado_Matricula:String,
    Semestre:String,
    Celular:String	,
    Correo:String,
    Contraseña:String,
    Correo_institucional:String,
    Rol:String,

}
