function displayLyrics(lyrics) {
    let currentIndex = 0
    const showNextLine = () => {
        if (currentIndex >= lyrics.length) return

        if (lyrics[currentIndex].text.includes("")) {
            let charPosition = 0
            const text = lyrics[currentIndex].text
            const speed = lyrics[currentIndex].typingSpeed ?? 100
            const delay = lyrics[currentIndex].delay ?? 0
            const typeCharacter = () => {
                if (charPosition < text.length) {
                    process.stdout.write(text[charPosition])
                    charPosition++
                    setTimeout(typeCharacter, speed)
                } else {
                    currentIndex++
                    setTimeout(showNextLine, delay)
                }
            }
            typeCharacter()
        } else {
            console.log(lyrics[currentIndex].text)
            setTimeout(() => {
                currentIndex++
                showNextLine()
            }, lyrics[currentIndex].delay ?? 0)
        }
    }
    showNextLine()
}

const songLyrics = [
  { text: "Ceeeeeeeeeriiiiiiiiiiiiiiiitaaaaaaaaa kitaaa tak jauh berbeda...\n", delay: 1500, typingSpeed: 90, skipTyping: false },
  { text: "Got ", delay: 400, typingSpeed: 0, skipTyping: true },
  { text: "beat ", delay: 200, typingSpeed: 0, skipTyping: true },
  { text: "down ", delay: 300, typingSpeed: 0, skipTyping: true },
  { text: "by ", delay: 300, typingSpeed: 30, skipTyping: false },
  { text: "the ", delay: 300, typingSpeed: 30, skipTyping: false },
  { text: "world...\n", delay: 1000, typingSpeed: 60, skipTyping: false },
  { text: "Sometimes I wana fold\n", delay: 700, typingSpeed: 50, skipTyping: false },
  { text: "Namun suratmu kan\n", delay: 700, typingSpeed: 60, skipTyping: false },
  { text: "Kuceritakan ke anak-anakku nanti\n", delay: 1200, typingSpeed: 70, skipTyping: false },
  { text: "Bahwa aku pernah di cintai...\n", delay: 1500, typingSpeed: 100, skipTyping: false },
  { text: "Seada-adanya...", delay: 10000, typingSpeed: 120, skipTyping: false }
]

displayLyrics(songLyrics)
