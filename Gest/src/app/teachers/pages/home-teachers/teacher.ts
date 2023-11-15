import { ObjectId } from "mongodb";
export interface Teachers{
    _id?:ObjectId,
    code_Teacher?:String,
    identification?:String,
    name?: String,
}