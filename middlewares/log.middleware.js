const fs = require("fs");
let logger = (req, res, next) => {
  let time = new Date();
  let vaqt = `${time.toLocaleDateString()} ${time.toLocaleTimeString()}`;
  //   console.log(vaqt);
  var ip = req.headers["x-real-ip"] || req.connection.remoteAddress;
  //   console.log(ip);

  fs.appendFileSync("./utils/logger.txt", ` ${ip}    ${vaqt} \n`);
  next();
};
module.exports = logger;
