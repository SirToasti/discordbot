const axios = require("axios");
const { SlashCommandBuilder } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("foxy")
    .setDescription("Replies with Non-sexy fox pic"),
  async execute(interaction) {
    const APIURL = "https://randomfox.ca/floof/";
    await interaction.deferReply();

    try {
      const request = await axios.get(APIURL);
      const image = request.data.image;
      interaction.editReply(image);
    } catch (error) {
      console.log(error);
      interaction.deleteReply();
    }
  },
};
