import mongoose from "mongoose";
import data from "../config.json";
import {constant} from "../lib/constant";
import {Config} from "./config";

export interface Mongodb {
    url:string
    options:mongoose.ConnectOptions
}
export class MongodbConfig implements Config{
    private readonly db: Mongodb | undefined
    constructor() {
        this.db={
            url:data.db.url,
            options:{
                dbName:data.db.options.dbName,
                user:data.db.options.user,
                pass:data.db.options.pass
            }
        }
    }
    get():Mongodb {
        if (!this.db) {
            throw new Error(`please initialize config with ${constant.DB}`)
        }
        return this.db
    }
}