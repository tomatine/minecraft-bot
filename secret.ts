import { dotenv } from "./deps.ts";


await dotenv.load({
    export:true,
})

export const Secret = {
    DISCORD_TOKEN: Deno.env.get("DISCORD_TOKEN")!,
    GUILD_ID: Deno.env.get("GUILD_ID")!,
}
