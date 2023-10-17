import Router from 'koa-router'
import AdminRouter from './admin'

export default class BaseRouter extends Router {
    private admin:AdminRouter = new AdminRouter()
    constructor() {
        super();
    }
    combine():Router.IMiddleware {
        return this.use(
            this.admin.routes(),
        ).routes()
    }
}