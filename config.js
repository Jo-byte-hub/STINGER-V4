require("./database/module")

//GLOBAL PAYMENT
global.storename = "Josh bugs"
global.dana = "2348104400066"
global.qris = "https://i.ibb.co/BnYRXcw/Josh-bugsjpg"


// GLOBAL SETTING
global.owner = "2348104400066"
global.namabot = " S҉ T҉ I҉ N҉ G҉ E҉ R҉- V҉ 4҉"
global.nomorbot = "2348104400066"
global.namaCreator = "*Joshua*"
global.linkyt = "https://youtube.com/@josh"
global.autoJoin = false
global.antilink = true
global.versisc = '4.0.1'

// DELAY JPM
global.delayjpm = 5500

// SETTING PANEL
global.apikey = 'PLTC'
global.capikey = 'PLTA'
global.domain = 'https://domain.com'
global.eggsnya = '15'
global.location = '1'



//GLOBAL THUMB

global.codeInvite = ""
global.imageurl = 'https://i.ibb.co/BnYRXcw/Josh-bugs.jpg'
global.isLink = 'https://chat.whatsapp.com/DwKlSK4yv2DKU4Bg9RJFKU'
global.packname = "Joshua"
global.author = "Josh"
global.jumlah = "5"


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})
