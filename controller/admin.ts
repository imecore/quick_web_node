import BaseController from "./base";
import AdminService from "../service/admin";
import {tool} from "../lib/tool";
import {Config} from "../config/config";
import {decorator} from "../lib/decorator";

const authorized = decorator.authorized
export default class AdminController extends BaseController{
    static adminService:AdminService = new AdminService()

    constructor() {
        super();
    }
    async login(ctx:any):Promise<void>{
        let username:string = ctx.request.body.username
        let password:string = tool.desDecode(ctx.request.body.password,Config.desKey)
        let pass:boolean | void =await AdminController.adminService
            .get(username)
            .then((u: any):boolean=>{
                return Boolean(u && u.password == tool.md5(password, u.salt));
            })
            .catch(e=>{ctx.throw(e)})
        if (!pass) {
            return super.response(ctx,401,"invalid username or password")
        }
        ctx.session={username : username}
        super.response(ctx,200,"ok")
    }
    async logout(ctx:any):Promise<void>{
        ctx.session = null
        super.response(ctx,200,"ok")
    }

    @authorized
    async create(ctx:any):Promise<void>{
        let username:string = ctx.request.body.username
        let pass:string = tool.desDecode(ctx.request.body.password,Config.desKey)
        await AdminController.adminService
            .create(username,pass)
            .then(():void=>{super.response(ctx,200)})
            .catch(e=>{ctx.throw(e)})
        super.response(ctx,200,"ok")
    }
    getById(ctx:any):void {
        super.response(ctx,200,"amy")
    }
}