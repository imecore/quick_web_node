import Router from 'koa-router'
import AdminController from '../controller/admin'

export default class AdminRouter {
    private R:Router = new Router()
    private C:AdminController = new AdminController()
    constructor() {}

    routes():Router.IMiddleware{
        this.R.get("/admin",this.C.getById)
        this.R.post("/admin",this.C.create)
        this.R.post("/login",this.C.login)
        this.R.post("/logout",this.C.logout)

        return this.R.routes()
    }
}