/*Ini untuk setting Bot
Untuk gambar background menu ada - di plugins menu
untuk lainya saran jangan di ubah bre nanti eror*/

/*global owner*/
global.owner = ['6282281657946']  
global.mods = ['6282281657946'] 
global.prems = ['62856091885235']
/*Nomor Owner & payment*/
global.nameowner = 'IKYY-OFFICIAL'
global.numberowner = '6282281657946' 
global.dana = '6285609188523'
global.pulsa = '6289514509029'
global.gopay = '6282281657946'
/*Nama Bot & Grouplink*/
global.namebot = 'IKYYBOT-MD'
global.gc = 'https://chat.whatsapp.com/Lao3HWH4lYiBzWBR38HbTX'
global.web = 'https://github.com/diki6969'
global.instagram = 'https://instagram.com/'
/*global wm*/
global.lolkey = 'rey2k22'
global.zenzkey = 'BagasPrdn'
global.wm = 'ยฉ ๐๐ ๐ฎ๐ฎ๐ฝ๐ค๐ฉ-๐๐ฟ'
global.watermark = wm
global.wm2 = 'โซนโซบ ๐๐๐๐๐ฝ๐๐-๐๐ฟ'
global.wm3 = 'ยฉ ๐๐๐๐๐ฝ๐๐-๐๐ฟ'
global.wm4 = 'ยฉ ๐๐ข๐ง ๐๐๐ฌ๐ฌ'
global.fla = 'https://api.tiodevhost.my.id/api/textpro/glitch?text='
global.wait = '_*Tunggu sedang di proses...*_'
global.eror = '_*Server Error*_'
global.benar = 'Benar โ\n'
global.salah = 'Salah โ\n'
global.stiker_wait = '*โซนโซบ Stiker sedang dibuat...*'
global.packname = 'Made with'
global.author = 'Bot WhatsApp\n๐๐๐๐๐ฝ๐๐-.๐๐ฟ'
/*Rest api setting*/
global.APIs = { // API Prefix
  // name: 'https://website'
  xteam: 'https://api.xteam.xyz',
  dzx: 'https://api.dhamzxploit.my.id',
  zeks: 'https://api.zeks.xyz',
  zekais: 'http://zekais.com',
  lolhuman: 'https://api.lolhuman.xyz',
  tio: 'http://api.tiodevhost.my.id', 
  popcat: 'https://api.popcat.xyz',
  rey: 'https://sekha.me'
}
global.APIKeys = { // APIKey Here
  // 'https://website': 'apikey'
  'https://sekha.me': 'apirey',
  'https://api.xteam.xyz': 'd37372311698ed1d',
  'https://pencarikode.xyz': 'pais', 
  'https://zekais.com': 'apikeymu',
  'https://api.lolhuman.xyz': 'SGWN',
}

/*Setting Rpg*/
global.multiplier = 45
global.rpg = {
  emoticon(string) {
    string = string.toLowerCase()
    let emot = {
      exp: 'โ๏ธ',
      money: '๐ต',
      potion: '๐ฅค',
      diamond: '๐',
      common: '๐ฆ',
      uncommon: '๐',
      mythic: '๐ณ๏ธ',
      legendary: '๐๏ธ',
      pet: '๐',
      sampah: '๐',
      armor: '๐ฅผ',
      sword: 'โ๏ธ',
      kayu: '๐ชต',
      batu: '๐ชจ',
      string: '๐ธ๏ธ',
      kuda: '๐',
      kucing: '๐' ,
      anjing: '๐',
      petFood: '๐',
      gold: '๐',
      emerald: '๐'
    }
    let results = Object.keys(emot).map(v => [v, new RegExp(v, 'gi')]).filter(v => v[1].test(string))
    if (!results.length) return ''
    else return emot[results[0][0]]
  }
}

/*Jangan merubah bagian ini!*/
let fs = require('fs')
let chalk = require('chalk')
let file = require.resolve(__filename)
fs.watchFile(file, () => {
  fs.unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  delete require.cache[file]
  require(file)
})
