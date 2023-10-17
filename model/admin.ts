import mongoose, {Schema} from "mongoose";
import {constant} from "../lib/constant";
import {tool} from "../lib/tool";

export module AdminModel{
    let admin:Schema = new Schema({
        username: {type:String,unique:true},
        password: String,
        salt: String
    })

    admin.pre("save",function (next){
        if (!this.isModified("password")){
            return next()
        }
        this.password = tool.md5(this.password,this.salt)
        return next()
    })

    mongoose.model(constant.MODEL.ADMIN,admin,constant.MODEL.ADMIN)
}
