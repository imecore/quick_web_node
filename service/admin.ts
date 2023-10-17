import {constant} from "../lib/constant";
import BaseService from "./base";
import {decorator} from "../lib/decorator";
import {AdminModel} from "../model/admin";
import {tool} from "../lib/tool";

const registryModel = decorator.registryModel

@registryModel(AdminModel)
export default class AdminService extends BaseService {
    constructor() {
        super(constant.MODEL.ADMIN);
    }
    create(username:string, password:string):Promise<any>{
        return this.M.create({
            username:username,
            password:password,
            salt:tool.token()
        })
    }
    get(username:string):Promise<any> {
        return this.M.findOne({username:username}).exec()
    }
}