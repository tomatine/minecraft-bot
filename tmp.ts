import { dotenv } from "./deps.ts";

console.log(await dotenv.load({export:true}));