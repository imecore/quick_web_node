import data from "../config.json";
import {constant} from "../lib/constant";
import {Config} from "./config";

export interface Application {
    version:string
    env:string
    port:number
    keys:string[]
}
export class ApplicationConfig implements Config{
    private readonly app: Application | undefined
    constructor() {
        this.app={
            version : data.app.version,
            env : data.app.env,
            port : data.app.port,
            keys:data.app.keys
        }
    }
    get():Application{
        if (!this.app) {
            throw new Error(`please initialize config with ${constant.APPLICATION}`)
        }
        return this.app
    }
}