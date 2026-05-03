module.exports.config = {
  name: "nudegirl",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "𝐏𝐫𝐢𝐲𝐚𝐧𝐬𝐡 𝐑𝐚𝐣𝐩𝐮𝐭",
  description: "nude image of anime girl",
  commandCategory: "nsfw",
  usages: "nudegirl",
  cooldowns: 3,
  dependencies: {
    "request": "",
    "fs-extra": "",
    "axios": ""
  }
};

module.exports.run = async ({ api, event, args, client, Users, Threads, __GLOBAL, Currencies }) => {
  const axios = global.nodemodule["axios"];
  const request = global.nodemodule["request"];
  const fs = global.nodemodule["fs-extra"];
  var link = [
    "https://i.ibb.co/4nBLm1zj/erotic-sensual-body-9348318.jpg",
    "https://i.ibb.co/G4DhfqWb/erotic-breasts-9348234.webp",
    "https://i.ibb.co/svKrzThv/butt-erotic-David-Dubnitskiy-9347866.jpg",
    "https://i.ibb.co/3mvp5pDt/Charly-S-G-suicide-girls-erotic-9347207.jpg",
    "https://i.ibb.co/5x41MKFz/Charly-S-G-suicide-girls-erotic-9347208.jpg",
    "https://i.ibb.co/NdW4xR41/erotic-breasts-9347186.webp",
    "https://i.ibb.co/8g4ddjMh/Admiring-Beauty-Art-erotic-tatoo-9345973.jpg",
    "https://i.ibb.co/x8S9XXVJ/Anastasiia-Zakharenko-aveestel-Mayafitt-9344575.jpg",
    "https://i.ibb.co/9HPwVXSw/Anastasiia-Zakharenko-aveestel-Mayafitt-9344582.jpg",
    "https://i.ibb.co/v5KZkYn/erotic-butt-boobs-9344460.jpg",
    "https://i.ibb.co/rRhyJw4Y/erotic-butt-boobs-9344461.jpg",
  ];
  var callback = () => api.sendMessage({ body: `All day I know Buscu Buslon. 😏`, attachment: fs.createReadStream(__dirname + "/cache/5.jpg") }, event.threadID, () => fs.unlinkSync(__dirname + "/cache/5.jpg"));
  return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname + "/cache/5.jpg")).on("close", () => callback());
};
