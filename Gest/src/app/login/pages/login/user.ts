import { ObjectId } from "mongodb";
export interface Usuarios{
    _id?:ObjectId,
    email:String,
    password:String,
    role:String,
    code_User:String,
}