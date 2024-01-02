// discord.js v14では、下記のようにRESTとRoutesはdiscord.jsパッケージから直接インポートできます
import { REST, Routes } from 'discord.js';

// hey.jsのmodule.exportsを呼び出します。
import {heyFile} from './commands/hey.js';

// 環境変数としてapplicationId, guildId, tokenの3つが必要です
import fs from 'fs';
const config = JSON.parse(fs.readFileSync('./config.json', 'utf-8'));
const { applicationId, guildId, token } = config;

// 登録コマンドを呼び出してリスト形式で登録
const commands = [heyFile.data.toJSON()];

// DiscordのAPIには現在最新のversion10を指定
const rest = new REST({ version: '10' }).setToken(token);

// Discordサーバーにコマンドを登録
(async () => {
    try {
        await rest.put(
            Routes.applicationGuildCommands(applicationId, guildId),
            { body: commands },
        );
        console.log('サーバー固有のコマンドが登録されました！');
    } catch (error) {
        console.error('コマンドの登録中にエラーが発生しました:', error);
    }
})();