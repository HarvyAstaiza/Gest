import { ObjectId } from "mongodb";

export interface Courses{
    _id?:ObjectId, 
    code_Subjects:String,
    name:String,
    semester:String,
    type_of_matter:String,
    id_teacher:String,
    id_thematic:String,
    id_bibliography:String,
    id_cybergraphy:String,
}