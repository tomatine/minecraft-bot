// SlashCommandBuilder という部品を discord.js からインポートしています。
// これにより、スラッシュコマンドを簡単に構築できます。
import { SlashCommandBuilder } from 'discord.js';

// 以下の形式にすることで、他のファイルでインポートして使用できるようになります。
const data = new SlashCommandBuilder()
    .setName('hey')
    .setDescription('あいさつに反応してbotが返事します');

async function execute(interaction) {
    const name = interaction.user.username;
    await interaction.reply(`hey, ${name}!`);
}

export const heyFile = { data, execute };