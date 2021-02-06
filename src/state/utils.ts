import {CardProps} from './../types'

export const generate = (characters: string, pinyin: string, meaning: string, type: string): CardProps => ({
    characters,
    pinyin,
    meaning,
    type
});

