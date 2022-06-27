import type { NextApiRequest, NextApiResponse } from "next"
import GeradorLeroLero from "../../src/vendor/GeradorLeroLero"

export default function Tweet(req: NextApiRequest, res: NextApiResponse) {
    const generator: GeradorLeroLero = new GeradorLeroLero()

    const tweet: string = generator.build() + "."
    res.status(200).json(tweet)
}