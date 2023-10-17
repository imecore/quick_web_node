
export default class BaseController {
    constructor() {}
    response(ctx:any,status:number,data?:any):void{
        ctx.status = status
        ctx.body = data
    }
}