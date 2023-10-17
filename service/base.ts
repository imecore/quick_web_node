import mongoose from "mongoose";

export default class BaseService {
    M:mongoose.Model<any,any,any,any,any,any>
    constructor(name:string) {
        this.M = mongoose.model(name)
    }
}