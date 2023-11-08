import { ObjectId } from "mongodb";

export interface Students{
    _id?:ObjectId
    code_Student:String,
    name_Student:String,
    document_Student:String,
    Enrollment_Status:boolean,

}
