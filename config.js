import { watchFile, unwatchFile } from 'fs'
import chalk from 'chalk'
import { fileURLToPath } from 'url'
import fs from 'fs'
import fetch from 'node-fetch'
import axios from 'axios'


global.owner = [
  ['2349045613439', '✞ꪻ᥇ꪮꪗ™', true],
  [''], 
  [''] 
] //Number of owners

//global.pairingNumber = "2349045613439" //put your bot number here

global.mods = ['2347045035241','2348021779696'] 
global.prems = ['2347045035241', '2348021779696', '2347045038687']
global.allowed = ['2347045035241', '2348021779696', '2347045038687']
global.keysZens = ['c2459db922', '37CC845916', '6fb0eff124']
global.keysxxx = keysZens[Math.floor(keysZens.length * Math.random())]
global.keysxteammm = ['29d4b59a4aa687ca', '5LTV57azwaid7dXfz5fzJu', 'cb15ed422c71a2fb', '5bd33b276d41d6b4', 'HIRO', 'kurrxd09', 'ebb6251cc00f9c63']
global.keysxteam = keysxteammm[Math.floor(keysxteammm.length * Math.random())]
global.keysneoxrrr = ['5VC9rvNx', 'cfALv5']
global.keysneoxr = keysneoxrrr[Math.floor(keysneoxrrr.length * Math.random())]
global.lolkeysapi = ['GataDios']

global.APIs = { // API Prefix
  // name: 'https://website'
  xteam: 'https://api.xteam.xyz', 
  dzx: 'https://api.dhamzxploit.my.id',
  lol: 'https://api.lolhuman.xyz',
  violetics: 'https://violetics.pw',
  neoxr: 'https://api.neoxr.my.id',
  zenzapis: 'https://zenzapis.xyz',
  akuari: 'https://api.akuari.my.id',
  akuari2: 'https://apimu.my.id',
  nrtm: 'https://fg-nrtm.ddns.net',
  bg: 'http://bochil.ddns.net', 
  fgmods: 'https://api-fgmods.ddns.net'
}
global.APIKeys = { // APIKey Here
  // 'https://website': 'apikey'
  'https://api.xteam.xyz': 'd90a9e986e18778b',
  'https://api.lolhuman.xyz': '85faf717d0545d14074659ad',
  'https://api.neoxr.my.id': `${keysneoxr}`,        
  'https://violetics.pw': 'beta',
  'https://zenzapis.xyz': `${keysxxx}`, 
  'https://api-fgmods.ddns.net': 'fg-dylux'
}

// Sticker WM
global.botname = '✞ꪻ᥇ꪮꪗ™'
global.premium = 'true'
global.packname = '✞' 
global.author = '✞ꪻ᥇ꪮꪗ™' 
global.menuvid = 'https://telegra.ph/file/6a1e30e7db91b4f0d5158.mp4'
global.Channel = 'https://whatsapp.com/channel/0029VaBcXo4JJhzW9c1uVD2X' 
global.dygp = 'https://chat.whatsapp.com/E9gwnn6w48dKPLez1BBNt5'
global.fgsc = 'https://github.com/Goku-v2/STAR-BOT' 
global.Channel2 = 'https://whatsapp.com/channel/0029VaBcXo4JJhzW9c1uVD2X'
global.Wa = 'https://wa.me/2349045613439'
global.fglog = 'STAR.jpg' 
global.thumb = fs.readFileSync('./STAR.jpg')
global.shizokeys = 'shizo'


global.wait = '*🕒 _✞ꪻ᥇ꪮꪗ™ IS  LOADING WAIT..._*\n*▰▰▰▱▱▱▱▱ 💫*'
global.rwait = '🔜'
global.dmoji = '⤵️'
global.done = '☑️'
global.error = '☠️' 
global.xmoji = '⚡' 

global.multiplier = 69 
global.maxwarn = '3' 

let file = fileURLToPath(import.meta.url)
watchFile(file, () => {
  unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  import(`${file}?update=${Date.now()}`)
})
