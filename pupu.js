const Discord = require('discord.js');
const { token } = require('./process.env');
const client = new Discord.Client();

client.login(token);

// 連上線時的事件
client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});


//叫噗噗
client.on('message', (msg) => {
  const prefix = '/';
  if (!msg.content.startsWith(prefix)) return;
  const args = msg.content.slice(prefix.length).split(' ');
 
  switch (args[0]) {
    case '噗噗':
      const Number = Math.floor(Math.random() * (3 - 1)) + 1; // 從 3 ~ 1 中挑選一個號碼

	  let result;
	  if(Number=='1'){result='噗噗噗'};
	  if(Number=='2'){result='噗噗？'};
	  if(Number=='3'){result='噗噗！噗！'};
	  
	  return msg.reply(`${result}`);
  }
});


//抽籤功能
client.on('message', (msg) => {
  const prefix = '/';
  if (!msg.content.startsWith(prefix)) return;
  const args = msg.content.slice(prefix.length).split(' ');
 
  switch (args[0]) {
    case '抽籤':
      const Number = Math.floor(Math.random() * (3 - 1)) + 1; // 從 3 ~ 1 中挑選一個號碼

	  let result;
	  if(Number=='1'){result='👍'};
	  if(Number=='2'){result='👍👍'};
	  if(Number=='3'){result='👍👍👍'};
	  
	  return msg.reply(`${result}`);
  }
});
;
