const fs = require('fs-extra')
if (fs.existsSync('config.env')) require('dotenv').config({ path: __dirname+'/config.env' })


//═══════[Required Variables]════════\\
global.owner = process.env.OWNER_NUMBER.split(",")
global.mongodb = process.env.MONGODB_URI || "Enter-MongoURI-HERE"
global.port= process.env.PORT || 5000
global.email = 'sam@secktor.live'
global.github = 'https://github.com/SamPandey001/Secktor-Md'
global.location = 'Sultanpur IN'
global.gurl = 'https://instagram.com/' // add your username
global.sudo = process.env.SUDO || '919628516236'
global.devs = '919628516236';
global.website = 'https://github.com/SamPandey001/Secktor-Md' //wa.me/+91000000000000
global.THUMB_IMAGE = process.env.THUMB_IMAGE || 'https://raw.githubusercontent.com/SecktorBot/Brandimages/main/logos/SocialLogo%201.png'
module.exports = {
  botname: process.env.BOT_NAME || '𝐒𝐞𝐜𝐤𝐭𝐨𝐫 𝐁𝐨𝐭𝐭𝐨',
  ownername:process.env.OWNER_NAME || 'SamPandey001',
  sessionName: process.env.SESSION_ID || 'eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMEVOckZKSm9WRUkrTURBNFdhVGxQalpmUnZCNjdpdXhMVERteUFkSDUxcz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSUQvVFB4Y1RnVU85L3E5cDhCMzV6NUVvbHhnekt0QzZLaWIzemdZWVdFOD0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIwTmJyWVZpeUtDckJQOWhBQmZaVXNtNnNzV1dBNnBKV01HK0U5WTl5dUVJPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJDMDF6SGlpbXhLRlBhRmxTUUd5UTFBMDRtSktKQnRVdFdzZVhkbW1IK1JVPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImVNTjVyTHJYSDlhNjZRdGRtTi9PcFpmU2lnTm00aG1RcnBrWUFlQnB6MDg9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImprZXRYemtETSs2YUx1NmxWWE51WjRGbUxwMnR5UDVDSi9TSTJ5QUwxR0U9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoid0VXdHNnaW5HNW1ydG1iUHFlcnJtN2l3cHlOTFB3WWxyOVE0VjBRK0VtVT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZFpmdE9ndFVTMlJIcENoeHVPTC9OM3Fpbk14TS8zVmg4T0ZPY29RVVZ6QT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjBXYnJvZUM2TkRpc0Y4TDBHcyt2U1pBaDEvVmdyYUs4Zm4zckxnOFJlZGlkbWVobFJsSldmUnlPbXJjMzJUVUZQaWNncU9lNmIrcWhtcmVJSldwVkR3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6NjIsImFkdlNlY3JldEtleSI6IjVUWnRaMERicDhpYkRWMGphWnZJWkRIcExqWENiRFdlRzdNVmVFOWEwUkU9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbeyJrZXkiOnsicmVtb3RlSmlkIjoiMjQ0OTQ2NzAyODE0QHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IjhGQzgxQkU4OUZGMDcxMDRGQzYyOUJFRDA4N0QzQjkxIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3MzA0MDIyNTZ9LHsia2V5Ijp7InJlbW90ZUppZCI6IjI0NDk0NjcwMjgxNEBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiIwRjIzN0RGMTgwQUM1MjkxNURDREZDMzM1RjZENTQ5MSJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzMwNDAyMjU3fV0sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjoxLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJoV0U4a19XSlJQbUlUNDNRTy04THRnIiwicGhvbmVJZCI6IjQ4ZjQ5Mzc3LTY0ZWQtNDg5OC1iMDJhLTIyM2MyOGVkNWVjYSIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI0NE9MTHJCdG5EQUxwQWJLVUF2Y0V2TGZFQUk9In0sInJlZ2lzdGVyZWQiOmZhbHNlLCJiYWNrdXBUb2tlbiI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImNuWVdqbnR6bjJzODE0QVJGZWxNVHhOMUdnYz0ifSwicmVnaXN0cmF0aW9uIjp7fSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ09yZXhia0JFTCt2ajdrR0dBY2dBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6Im5HcXpiekJ0bTNKNXFJNlpNSUl0WWt0QlVIbTJhNVFRRitDY0V1Z3RTUVk9IiwiYWNjb3VudFNpZ25hdHVyZSI6Ilc1VXpZZm04ZUxBaEg0NjJyOERhSkZoSlRsM1NCekhQZ1FJSnFHSjRxTUFUR1ROL285NUFEbG9WQWtXUGJrY21ySVlkNjg5eFkyQXg4N0FIMDI5VURRPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJuQUJHR1Nuc0gxdnlsZjF6dEhwRVpnSjhMQnVuMU96STI1NFN1ZnBoeFYrYit5c1VGVU40K3c2VG55bzEzdEJmNEJnWi85cVZxRmdoalZoZ1ZPTnZDQT09In0sIm1lIjp7ImlkIjoiMjQ0OTQ2NzAyODE0OjlAcy53aGF0c2FwcC5uZXQiLCJsaWQiOiIxMTgxMDc4MDkwMjYwODQ6OUBsaWQiLCJuYW1lIjoi6qeB8J+lgPCdkazwnZGr8J2Rs/CdkazwnZKAIPCdkarwnZGo8J2RufCdkbvwnZGs8J2RueKBluKEmOC8kiJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyNDQ5NDY3MDI4MTQ6OUBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJaeHFzMjh3Ylp0eWVhaU9tVENDTFdKTFFWQjV0bXVVRUJmZ25CTG9MVWtHIn19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwicm91dGluZ0luZm8iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJDQTBJQ0E9PSJ9LCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MzA0MDIyNTMsImxhc3RQcm9wSGFzaCI6IjI4WlJsYSIsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBRzJrIn0=',
  author: process.env.PACK_INFO.split(";")[0] || 'author', 
  auto_read_status : process.env.AUTO_READ_STATUS || 'false',
  packname: process.env.PACK_INFO.split(";")[1] || 'Name',
  autoreaction: process.env.AUTO_REACTION || 'off',
  antibadword : process.env.ANTI_BAD_WORD || 'nobadwordokey',
  alwaysonline: process.env.ALWAYS_ONLINE || 'false',
  antifake : process.env.FAKE_COUNTRY_CODE || '',
  readmessage: process.env.READ_MESSAGE || false,
  HANDLERS: process.env.PREFIX || ['.'],
  warncount : process.env.WARN_COUNT || 3,
  disablepm: process.env.DISABLE_PM || "flase",
  levelupmessage: process.env.LEVEL_UP_MESSAGE || 'false',
  antilink: process.env.ANTILINK_VALUES || 'chat.whatsapp.com',
  antilinkaction: process.env.ANTILINK_ACTION || 'remove',
  BRANCH: 'main',
  ALIVE_MESSAGE: process.env.ALIVE_MESSAGE || '',
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || 'OPENAI_KEY',
  VERSION: process.env.VERSION === undefined ? 'v.0.0.3' : process.env.VERSION,
  LANG: process.env.THEME|| 'SECKTOR',
  WORKTYPE: process.env.WORKTYPE === undefined ? 'public' : process.env.WORKTYPE
};


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(`Update'${__filename}'`)
    delete require.cache[file]
	require(file)
})
