let handler = async (m, { conn, command }) => {
let tioapikey = `https://api.lolhuman.xyz/api/meme/memeindo?apikey=SGWN`
    conn.sendButtonImg(m.chat, tioapikey, 'Nih', wm2, 'Next', `.${command}`, m) 
}
handler.help = ['meme2']
handler.tags = ['fun']
handler.command = /^(meme2)$/i
handler.limit = false

module.exports = handler
