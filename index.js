const WebClient = require("@slack/client").WebClient;
const slackToken = "";
const client = new WebClient(slackToken);
const channelID = "";

module.exports.subscribe = (event, callback)=>{
  const build = eventToBuild(event.data.data);
  const status = ['SUCCESS', 'FAILURE', 'INTERNAL_ERROR', 'TIMEOUT'];

  if (status.indexOf(build.status) === -1) {
    return callback();
  }

  client.chat.postMessage({
    channel: channelID,
    text: `Build \`${build.id}\``,
    attachments: [{
      title: "Build Logs",
      title_link: build.logUrl,
      fields: [{
        title: 'Status',
        value: build.status
      }]
    }]
  });
}

const eventToBuild = (data) => {
  return JSON.parse(new Buffer(data, 'base64').toString());
}
