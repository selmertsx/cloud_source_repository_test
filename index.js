const WebClient = require("@slack/client").WebClient;
const slackToken = process.env.SLACK_TOKEN;
const client = new WebClient(slackToken);
const channelID = process.env.CHANNEL_ID;

module.exports.subscribe = function subscribe(event, callback) {
  /*
  const build = eventToBuild(event.data.data);
  const status = ['SUCCESS', 'FAILURE', 'INTERNAL_ERROR', 'TIMEOUT'];

  if (status.indexOf(build.status) === -1) {
    return callback();
  }

  await client.chat.postMessage({
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
  */

  console.log(process.env.SLACK_TOKEN);
  return callback(null, "Success");
}

const eventToBuild = (data) => {
  return JSON.parse(new Buffer(data, 'base64').toString());
}
