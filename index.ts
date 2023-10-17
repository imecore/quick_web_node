import App from './engine/app'
import BodyParser from 'koa-bodyparser'
import Db from "./engine/db"
import BaseRouter from './router/base'
import Cache from "./engine/cache";
import session from "koa-session";
import SessionStore from "./engine/session"
import {Config} from "./config/config";

(function main():void{
    // db
    const db:Db = new Db()
    db.start()

    // redis
    const cache:Cache = new Cache()
    cache.start()

    // application
    const app:App = new App()
    app.start()
    app.koa.use(session({key:Config.sessionKey,signed:true,httpOnly:true,store:new SessionStore()},app.koa))
    app.koa.use(BodyParser())

    // router
    const R:BaseRouter = new BaseRouter()
    app.koa.use(R.combine()).use(R.allowedMethods)

    process.on('SIGINT',()=>{
        db.close().then(()=>{process.exit(0)}).catch(e=>{console.error(e)})
    })

})()
