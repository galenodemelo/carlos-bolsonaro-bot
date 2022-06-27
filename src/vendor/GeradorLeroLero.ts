import phrasesList from "../../settings/phrases"

class GeradorLeroLero {
    
    private shuffledPhrasesList: string[][] = []

    constructor() {
        this.shuffledPhrasesList = this.shuffle()
    }

    build(): string {
        const phrase: string = this.shuffledPhrasesList.map(((phrases: string[]) => phrases[0])).join(" ")
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