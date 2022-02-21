const app = require("express")()
const {Telegraf,session, Scenes:{Stage, WizardScene}} = require("telegraf")
const dotenv = require("dotenv")
const { application } = require("express")
dotenv.config({path:"./config.env"})
const bot = new Telegraf(process.env.BOT_TOKEN)

bot.start(ctx=>{
    ctx.reply("this is a dummy bot")
})

bot.launch()
app.listen(process.env.PORT || 3000)