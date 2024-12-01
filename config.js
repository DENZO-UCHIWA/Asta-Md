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
  sessionName: process.env.SESSION_ID || 'eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSU4vKzRDMmc3M08wdjZHTVlBT1MwOTlHYlVMRFVnRmNILzQzZzcrNDdXWT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiR294a09ha3ZwcnVXNGhUR3FwckI4Qkx3aWFpekxQdmtNbXVKeDlWeWZqWT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJNSXRqMkJzVURSS3NzeFBWWkdod0E5d09BK3Y2ejB0L3ZGbjZEUFRrMDBnPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJvRk5hajNjOVl0aDBVa1o5SUV3bWRYVGdsdm4zTDlxd1ZIM2NxUnhCMzJzPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IndMd1p3ZkNiVjV6MlFuK1gzQnowNnlQREluK1BmWGQrQUdFQ2xUbFN5bjg9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjRlalRjL1diRG5ZclFUMnVMeVFkRktKaW9ULzRKTkdiR0tONFVTZkUzRjg9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSUZuSWRUcWw5ZW5aeWE2YkhzYVRLWkhiRWxlQm5WVzZiZ3ZOVFI4QlhWYz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRW1BZ0Ftc3RrWUVGS3NFMU95dVorV25seVlBaFlHVklrOXA4bVNJT2lVMD0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImQ4SlBEQVJDV0s3TDcvcFlWc3REeTAxVkF6K0dtMHpRSkJsUXdNTGV0cC85Rk94ODRqY244blVoeTAyR3dUamRhbEh0VDFabjhXNmQ3dUFQQzRCK2hnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6OTgsImFkdlNlY3JldEtleSI6Ik1MdTdyU0RVNU5ML2FJaGNHUnRZSlJzSlU4a3UweDNpbnhQdEJWSk5lV0k9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6ImNFRjAwRF9SUkM2NWZ5d0FNQ1Q3SlEiLCJwaG9uZUlkIjoiNDIzMzY0ZDktZjczNy00MzFiLWExOGItMzgwYmQ4MzBhZGY0IiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlZHWjJCKzRVUUxxNXNGNERKbkNBeVlFbWdQWT0ifSwicmVnaXN0ZXJlZCI6ZmFsc2UsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiM3JhUjJWYmlScUxDcStaNWg3aHlua3dHcFZnPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDUHF3eXNzSUVNK1Fycm9HR0FFZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoicDNseWhIM1dpK3l0SGdzL1paU1dtaUhlV0xHa1p1OXdmUXYxT0F6NlZqWT0iLCJhY2NvdW50U2lnbmF0dXJlIjoiZ2ttT1JpeEFmWEdERUxhUzRQQnRiT0RGVVprWVFiR0VQTThEZXQxSjlUK2lqK0k3WGNWa1ZQZGViNXYyWjRnQ2lENzEvbitYMXYzaUZaRUZ6NUFTaXc9PSIsImRldmljZVNpZ25hdHVyZSI6IlBnZnpCN2NHVjhXbmx6MmFWYkovOEtINnJpREVXek91alBkam5sV1J3OG4va3MrSnhCNkZhL2x0N3QzL1ExdSs3RUt6SS9pVWVtZFU1NGd0UC84amp3PT0ifSwibWUiOnsiaWQiOiIyNDIwNjkyODM5NjY6ODNAcy53aGF0c2FwcC5uZXQiLCJsaWQiOiI0NTYyNTgyMzQ5NDI1Mjo4M0BsaWQifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiMjQyMDY5MjgzOTY2OjgzQHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQmFkNWNvUjkxb3ZzclI0TFAyV1VscG9oM2xpeHBHYnZjSDBMOVRnTStsWTIifX1dLCJwbGF0Zm9ybSI6ImlwaG9uZSIsInJvdXRpbmdJbmZvIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ0JJSUJRPT0ifSwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzMzMDAzMzU1LCJsYXN0UHJvcEhhc2giOiIzQW9TaHMifQ==',
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
