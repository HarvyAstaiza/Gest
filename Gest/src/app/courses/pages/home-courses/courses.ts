import { ObjectId } from "mongodb";

export interface Courses{
    _id?:ObjectId, 
    code_Subjects:String,
    name:String,
    semester:String,
    type_of_matter:string,
    id_teacher:string,
    methodology:string,
    period:string,
    Assessment_Status:string,
    teacher_Name:string;
}