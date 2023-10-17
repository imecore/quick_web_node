import {createClient,RedisClientType, RedisDefaultModules, RedisFunctions, RedisModules, RedisScripts} from "redis";
import {Redis, RedisConfig} from "../config/redis";

export default class Cache {
    private readonly conf:Redis
    private readonly client:RedisClientType<RedisDefaultModules & RedisModules, RedisFunctions, RedisScripts>
    constructor() {
        this.conf = new RedisConfig().get()
        this.client = createClient(this.conf)
    }
    start():void{
        this.client.connect().catch(e=>{throw e})
        this.client.on("connect",()=>{console.info(`connected:${this.conf.url}`)})
        this.client.on("error",e=>{console.error(e)})
    }
    getClient():RedisClientType<RedisDefaultModules & RedisModules, RedisFunctions, RedisScripts>{
        return this.client
    }
}