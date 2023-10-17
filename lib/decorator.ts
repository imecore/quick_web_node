export namespace decorator{

    // the decorator make sure module import be finished before constructor call.
    export function registryModel(...module:any[]):ClassDecorator{
        return function (constructor: Function):void{}
    }
    export function authorized(target: any, propertyKey: string, descriptor: PropertyDescriptor):TypedPropertyDescriptor<any>|void {
        let method = descriptor.value
        descriptor.value=function (ctx:any){
            if (ctx.session.username) {
                return method(ctx)
            }
            ctx.status = 401
            ctx.body = "Unauthorized"
        }
    }
}