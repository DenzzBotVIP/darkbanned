const chalk = require("chalk")
const fs = require("fs")

global.hituet = 0
global.gopayno = "6285771598591"
global.danano = "627775445830"
global.shopeepayno = "6285771598591"
global.creator = "6285771598591@s.whatsapp.net"
global.thumb = fs.readFileSync(`./image/thumb.png`)
global.raffxthumb = fs.readFileSync(`./image/raffxthumb.jpg`)
global.qrisdonate = fs.readFileSync(`./image/qris.jpg`)
global.fake = `TEAMS BOT STRAKZ`
global.ytraffx = `CEK PEMBARUAN SC`
global.server = `http/)12/)r:kf?@{raffx}.co.id.server(raffx)input.GET`
global.onlen = `00:00 : ? Reset ? : 00:00`
global.packname = `MONALISA`
global.author = `CREATOR`
global.antilink = false
global.antiwame = false
global.autodltt = false
global.autosticker = true
global.ownerNomor = '6285771598591'
global.ownerNomor2 = '13393095345'
global.ownerName = 'CREATOR'
global.ownerNumber = ["6285771598591@s.whatsapp.net"]
global.cek1 = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
global.mess = {
    wait: 'Sebentar Yah Di Proses...',
    succes: 'Selesai, Ini Hasilnya',
    admin: 'Group Admin Hanya Admin Yang Bisa!!!',
    botAdmin: 'Bot Haru Jadi Admin Dumlu!!!',
    owner: 'Ngapain Bang?, Fitur Ini Khusus Owner Nih!!!',
    group: 'Fitur Ini Hanya Bisa Di Gunakan Di Group!!!',
    private: 'Fitur Ini Hanya Bisa Di Gunakan Di Private Chat Pribadi!!!',
    bot: 'Khusus Nomer Bot!!!',
    error: 'Ada Yang Error, Silahkan Hubungi Owner Untuk Perbaikan...',
    premium: 'Maaf Sebelumya Kamu Belum Premium, Silahkan Pencet Di Bawah Untuk Beli Premium',
}

global.bapak = [
'Wah Mantap Lu Masih Punya Bapack\nPasti Bapack Nya Kuli :v\nAwowkwokwwok\n#CandabOs',
'Aowkwwo Disini Ada Yteam :v\nLu Yteam Bro? Awowkwowk\nSabar Bro Ga Punya Bapack\n#Camda',
'Bjir Bapack Mu Ternyata Sudah Cemrai\nSedih Bro Gua Liatnya\nTapi Nih Tapi :v\nTetep Ae Lu Yteam Aowkwowkw Ngakak :v',
'Jangan #cekbapak Mulu Broo :v\nKasian Yang Yteam\nNtar Tersinggung Kan\nYahahaha Hayyuk By : RaffX Teams',
]

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
