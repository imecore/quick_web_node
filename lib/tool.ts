import crypto from "crypto";
import {constant} from "./constant";

export namespace tool {
    export function md5(d:string,salt:string):string{
        return crypto.createHash("md5").update(d+salt).digest("hex")
    }
    export function token(len:number = constant.CODE_LEN):string {
        const source:string = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ"
        let target = ""
        for (let i = 0; i < len; i++) {
            target += source.charAt(Math.floor(Math.random() * source.length))
        }
        return target;
    }
    export function desEncode(source:string,key:string):string{
        let cipher:crypto.Cipher = crypto.createCipheriv("des-ecb",Buffer.from(key,'utf8'),null).setAutoPadding(true)
        let code:string = cipher.update(source,"utf8","hex")
        code += cipher.final("hex")
        return code
    }
    export function desDecode(source:string,key:string):string{
        let cipher:crypto.Cipher = crypto.createDecipheriv("des-ecb",Buffer.from(key,'utf8'),null).setAutoPadding(true)
        let code:string = cipher.update(source,"hex","utf8")
        code += cipher.final("utf8")
        return code
    }
}