import mongoose from "mongoose";
import {Mongodb, MongodbConfig} from "../config/mongodb";

export default class Db {
    private readonly conf:Mongodb
    constructor() {
        this.conf = new MongodbConfig().get()
    }
    start():void{
        mongoose.connect(this.conf.url,this.conf.options).catch(e=>{throw e})
        mongoose.connection.on("connected",()=>{console.info(`connected:${this.conf.url}`)})
        mongoose.connection.on("disconnected",()=>{console.info(`disconnected:${this.conf.url}`)})
    }
    close():Promise<void> {
        return mongoose.connection.close()
    }
}