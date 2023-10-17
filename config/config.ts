import data from "../config.json";

export interface Config {
    get():any
}

export class Config {
    static desKey:string = data.desKey
    static sessionKey:string = data.sessionKey
}

module.exports = {Config}