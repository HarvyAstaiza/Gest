import { ObjectId } from "mongodb";
export interface Usuarios{
    _id?:ObjectId,
    email:String,
    password:String,
    role:String,
    code_User: {
        $ref: string; // Nombre de la colección a la que se hace referencia
        $id: ObjectId; // ID del documento referenciado
        $db?: string; // Opcional: Nombre de la base de datos
    };
}