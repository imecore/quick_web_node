import {tool} from "./tool";

let username:string = 'root'
let password:string = "123456";
let salt:string = 'ABCDEFGH';

console.log(tool.desEncode(password,"12345678"))
console.log(tool.md5(password,salt))