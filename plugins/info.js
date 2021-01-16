let handler  = async (m, { conn, usedPrefix: _p }) => {
  conn.reply(m.chat, `
╠═〘 White_Devil Trial Bot〙 ═
╠➥  Made in javascript via NodeJs
╠➥ Rec: ʀᴀɴᴊɪᴛʜ [ᴍʀ.ʀᴀᴠᴀɴᴀɴ]
╠➥ Script: ᴍʀ.ʀᴀᴠᴀɴᴀɴ
║
╠═〘 Thanks To 〙 ═
╠➥ White_Devil
╠➥ ᴍʀ.ʀᴀᴠᴀɴᴀɴ ™ 
╠➥ ™ ɪɴᴅᴏɴᴇsɪᴀ
            ʙʀᴜᴛᴀʟ
            ᴍᴀʀᴋɪᴠ
            ʀᴀᴠᴀɴᴀɴ
            ᴄʏʙᴇʀ ᴋᴀʟʟᴀɴ
            ʜɪᴛʟᴇʀ ᴛʜᴇ ɴᴀᴢɪ
            ᴄʏʙᴇʀ ᴄᴏᴍᴍᴀɴᴅᴏ
            
            ᴠɪsʜɴᴜ
            ᴡʜ173 5ᴘ1ᴅ3ʀ
             ʟᴏʀᴅ ᴏsɪʀɪs
╠➥ 
║
╠═〘 ബോട്ട്  〙 ═
╠➥ MAKE GROUP ADMIN 
╠
╠
║
║>
║
╠═〘 white_devil 〙 ═
`.trim(), m)
}
handler.command = /^(info)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler

