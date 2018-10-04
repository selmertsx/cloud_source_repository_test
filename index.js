const WebClient = require("@slack/client").WebClient;
const slackToken = "";
const client = new WebClient(slackToken);
const channelID = "";

module.exports.subscribe = (event, callback)=>{
  console.log(event);
  console.log("test");
  return callback("OK");
}
