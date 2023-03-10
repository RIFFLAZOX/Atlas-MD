const axios = require('axios')
const fs = require('fs')

module.exports = {
    name: "script",
    alias: ["repo","sc","sourcecode"],
    desc: "Say hello to bot.",
    react: "๐",
    category: "Core",
    start: async(Miku, m,{pushName,prefix}) => {
        let picURL = fs.readFileSync('./Page/BG.jpg')
        let repoInfo = await axios.get('*๐ แดแดแดกแดสแดแด สส : ๊ฑแดแดแดแดส ๐*')
        let repo = repoInfo.data
        let txt = `      ๐งฃ *${botName}'s Script* ๐งฃ\n\n*๐ Total Forks:* ${repo.forks_count}\n*โง Total Stars:* ${repo.stargazers_count}\n*๐ License:* ${repo.license.name}\n*๐ Repo Size:* ${(repo.size/1024).toFixed(2)} MB\n*๐ Last Updated:* ${repo.updated_at}\n\n*๐ Repo Link:* ${repo.html_url}\n\nโ Dont forget to give a Star โญ to the repo. It's made with restless harkwork by *Team ATLAS*. โ\n\n*ยฉ๏ธ Team ATLAS- 2023*`
        await Miku.sendMessage(m.from,{image:picURL, caption:txt},{quoted:m});
    }
}

