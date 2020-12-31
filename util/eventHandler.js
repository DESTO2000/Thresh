const reqEvent = (event) => require(`../Thresh/${event}`);
module.exports = client => {
    client.on("message", reqEvent("message"));
    client.on("guildMemberAdd", reqEvent("joining"))
    client.on("guildMemberRemove", reqEvent("removing"));
    //client.on("guildMemberAdd", reqEvent("Thresh-guardian"));
    client.on("ready", () => reqEvent("ready")(client, "message"));
}