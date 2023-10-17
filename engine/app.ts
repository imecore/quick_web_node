import Koa from 'koa'
import {Application, ApplicationConfig} from "../config/application";

export default class App {
    private conf:Application
    koa:Koa
    constructor() {
        this.conf = new ApplicationConfig().get()
        this.koa = new Koa({env:this.conf.env,keys:this.conf.keys})
    }
    start():void {
        this.koa.on("error", e=>{this.koa.onerror(e)})
        this.koa.listen(this.conf.port)
    }

}