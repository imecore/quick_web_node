import redis from "redis";
import data from "../config.json";
import {constant} from "../lib/constant";
import {Config} from "./config";

export interface Redis extends redis.RedisClientOptions{}

export class RedisConfig implements Config{
    private readonly redis: Redis | undefined
    constructor() {
        this.redis={
            url:data.redis.url,
            database: data.redis.database
        }
    }
    get():Redis {
        if (!this.redis) {
            throw new Error(`please initialize config with ${constant.REDIS}`)
        }
        return this.redis
    }
}
