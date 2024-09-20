/**
Terimakasih Kepada 
- Ryhar, Kyuu, My Self (balzz) , Dan Dani
- yang telah membuat meremake & memberikan code ini
**/

// console.log("\n")
console.log("\x1b[35m Wish You Were Here – Neckdeep")
console.log("\x1b[37m ig: @iqstore78")
console.log("\x1b[37m tt: @iqstore78")
console.log("\n")
let lyrics1 = "ㅤIf a picture is all that i have"
let lyrics2 = "ㅤI cant picture the times that we won't get back"
let lyrics3 = "ㅤIf i picture it now it don't seem so bad"
let lyrics4 = "ㅤEither way i still wish you were here."
let lyrics5 = "ㅤDon't say everything's mant to be"
let lyrics6 = "ㅤCause you know it's not what i beileve"
let lyrics7 = "ㅤCant help but think that it shold`ve been me"
let lyrics8 = "ㅤEither way,i still wish you were here."

const lyrics = [
    {text: lyrics1, delay: 110, color: "\x1b[34m"},
    {text: lyrics2, delay: 110, color: "\x1b[34m"}, 
    {text: lyrics3, delay: 100, color: "\x1b[34m"}, 
    {text: lyrics4, delay: 110, color: "\x1b[35m"}, 
    {text: lyrics5, delay: 160, color: "\x1b[34m"}, 
    {text: lyrics6, delay: 170, color: "\x1b[34m"}, 
    {text: lyrics7, delay: 165, color: "\x1b[34m"}, 
    {text: lyrics8, delay: 160, color: "\x1b[35m"}
]

async function displayLyrics(lyrics) {
    for (let i = 0; i < lyrics.length; i++) {
        let currentText = ''
        for (let j = 0; j < lyrics[i].text.length; j++) {
            currentText += lyrics[i].text[j];
            process.stdout.write(lyrics[i].color + currentText + '\r')
            await new Promise(resolve => setTimeout(resolve, lyrics[i].delay))
        }
        process.stdout.write(lyrics[i].color + currentText + '\n')
    }
}
displayLyrics(lyrics)

/**
- \x1b[32m (green)
- \x1b[33m (yellow)
- \x1b[34m (blue)
- \x1b[35m (magenta)
- \x1b[36m (cyan)
- \x1b[37m (white)
**/
