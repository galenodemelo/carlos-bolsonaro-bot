import type { NextApiRequest, NextApiResponse } from "next"
import config from "../../settings/config"
import GeradorLeroLero from "../../src/vendor/GeradorLeroLero"

export default function Tweet(req: NextApiRequest, res: NextApiResponse) {
    const generator: GeradorLeroLero = new GeradorLeroLero()
    const phraseCount: number = Math.round(Math.random() * (config.geradorLeroLero.phrases.max - config.geradorLeroLero.phrases.min) + config.geradorLeroLero.phrases.min)

    const tweet: string = [...Array(phraseCount)].map(() => generator.build()).join(" ")
    res.status(200).json(tweet)
}