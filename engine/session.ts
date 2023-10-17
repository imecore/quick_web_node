import {opts, Session, stores} from "koa-session";
import Cache from "./cache";
import {constant} from "../lib/constant";

export default class SessionStore implements stores{
    cache:Cache
    pre:string = "session:"
    constructor() {
        this.cache = new Cache()
        this.cache.start()
    }

    /**
     * get session object by key
     */
    async get(key: string, maxAge: opts["maxAge"], data: { rolling: opts["rolling"] }): Promise<any>{
        let result:string|null = await this.cache.getClient().get(this.pre + key)
        return JSON.parse(result?result:"")
    };

    /**
     * set session object for key, with a maxAge (in ms)
     */
    async set(key: string,
              sess: Partial<Session> & { _expire?: number | undefined, _maxAge?: number | undefined },
              maxAge: opts["maxAge"],
              data: { changed: boolean; rolling: opts["rolling"] }): Promise<any>{
        maxAge = typeof maxAge == "number" ? maxAge:constant.COOKIE_MAX_AGE
        return this.cache.getClient().set(this.pre + key,JSON.stringify(sess),{PX:maxAge})
    };

    /**
     * destroy session for key
     */
    async destroy(key: string): Promise<any>{
        return this.cache.getClient().del(this.pre +key)
    };
}