import { SlashCommandBuilder } from 'discord.js';
import fetch from 'node-fetch';
import fs from 'fs';
const config = JSON.parse(fs.readFileSync('./config.json', 'utf-8'));
const { serverIpAddress } = config;

const data = new SlashCommandBuilder()
    .setName('status')
    .setDescription('マイクラサーバーの状態を表示します');

async function execute(interaction) {
    try {
        let getResult = await getServerStatus(serverIpAddress);
        if (getResult.online) {
            await interaction.reply({ content: `このサーバーはオンラインで、${getResult.players.online}人がオンラインです。` });
        } else {
            await interaction.reply({ content: "このサーバーはオフラインです。" });
        }
    } catch (error) {
        await interaction.reply({ content: "サーバーステータスの取得中にエラーが発生しました。" });
    }
}

export const statusFile = { data, execute };

async function getServerStatus(ipAddress) {
    const response = await fetch("https://api.mcsrvstat.us/3/" + encodeURIComponent(ipAddress));
    return await response.json();
}
