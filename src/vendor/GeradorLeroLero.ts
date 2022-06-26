import phrasesList from "../../settings/phrases"

class GeradorLeroLero {
    
    private shuffledPhrasesList: string[][] = []
    private phraseCount: number = 0

    constructor() {
        this.shuffledPhrasesList = this.shuffle()
    }

    build(): string {
        const phrase: string = this.shuffledPhrasesList.map(((phrases: string[]) => phrases[this.phraseCount])).join("")
        this.phraseCount++
        if (this.phraseCount >= this.shuffledPhrasesList[0].length) {
            this.phraseCount = 0
            this.shuffle()
        }

        return phrase
    }

    private shuffle(): string[][] {
        let shuffledPhrasesList: string[][] = []
        phrasesList.forEach((phrases: string[]) => {
            shuffledPhrasesList.push(phrases.sort(() => Math.random() - .5))
        })

        return shuffledPhrasesList
    }
}

export default GeradorLeroLero