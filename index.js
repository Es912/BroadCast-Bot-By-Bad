const express = require("express");
const app = express();
///////////Bad - بدرو
app.listen(() => console.log("Bad Ro Start Now"));
app.listen(() => console.log("Dev Server : https://discord.gg/axmjaaX"));
app.use('/ping', (req, res) => {
  res.send(new Date());
});
///////////Bad - بدرو

const Discord = require('discord.js');
const client = new Discord.Client();
const cmd = require("node-cmd");
const ms = require("ms");
const fs = require('fs');
const ytdl = require("ytdl-core");
const canvas = require("canvas");
const convert = require("hh-mm-ss")
const fetchVideoInfo = require("youtube-info");
const simpleytapi = require('simple-youtube-api')
const util = require("util")
const gif = require("gif-search");
const jimp = require("jimp");
const guild = require('guild');
const hastebins = require('hastebin-gen');
const getYoutubeID = require('get-youtube-id');
const pretty = require("pretty-ms");
const moment = require('moment');
const request = require('request');
const dateFormat = require('dateformat');


///////////Bad - بدرو


const prefix = "البرفيكس حقك هنا"
const developers = "ايديك هنا"


client.on("ready", () => {
   client.user.setActivity(`${prefix}help`)


});




 ///////////Bad - بدرو

 client.on("message", message => {
    if (message.content.toLowerCase() === prefix + "help") {
        message.delete(5000)
        if(!message.channel.guild) return;
        const e = new Discord.RichEmbed()
       
        .setTitle(':white_check_mark: **تم أرسال اوامر التقديم في الخاص**')
     const embed = new Discord.RichEmbed()
        
         .setTitle('Bad Ro BroadCast')
         .setURL('https://discord.gg/axmjaaX')
         .setDescription(`
         \`\`\` Commands  :\`\`\`         
         
         - ${prefix}help
         		          
         - ${prefix}bc
         
         - ${prefix}ping
         
         - ${prefix}prime


This Bc Bot Make By : https://www.youtube.com/channel/UCKh6D-uY87Bb0y0w7XqUlzQ?view_as=subscriber


         
`)
   message.channel.send(e).then(m => m.delete(5000))
   message.author.sendEmbed(embed).catch(error => message.reply('**افتح الخاص لتصلك الاوامر**'))
   
   }
   });///////////Bad - بدرو




client.on('message',msg  => { if (msg.content === `${prefix}prime`) { msg.reply('**Soon...**'); } });///////////Bad - بدرو


///////////Bad - بدرو

client.on("message", message => {

            if (message.content.startsWith(prefix + "bc")) {
                         if (!message.member.hasPermission("ADMINISTRATOR"))  return;
  let args = message.content.split(" ").slice(1);
  var argresult = args.join(' '); 
  message.guild.members.filter(m => m.presence.status !== 'offline').forEach(m => {
 m.send(`${argresult}\n ${m}`);
})
 message.channel.send(`\`${message.guild.members.filter(m => m.presence.status !== 'online').size}\` : عدد الاعضاء المستلمين`); 
 message.delete(); 
}; ///////////Bad - بدرو    
});///////////Bad - بدرو

///////////Bad - بدرو

client.on('message', message =>{
  if(message.content === prefix + 'ping'){
let start = Date.now(); message.channel.send('pong').then(message => { 
message.edit(`\`\`\`js
Time taken: ${Date.now() - start} ms
Discord API: ${client.ping.toFixed(0)} ms\`\`\``);
  });
  }
});

client.login("حط توكن حق بوتك هنا");
