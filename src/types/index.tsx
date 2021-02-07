import React from "react";

export interface CardHideProps {
    characters: boolean,
    pinyin: boolean,
    meaning: boolean,
    type: boolean
}

export const CardHidePropsDefaults: CardHideProps = {
    characters: false,
    pinyin: false,
    meaning: false,
    type: false
}


export interface CardProps {
    characters: string,
    pinyin: string
    meaning: string
    type?: string,
    elementIndex?: number,
    totalCount?: number,
    hide?: CardHideProps
}


// export interface CardListProps {
//   cardList: CardProps[]
// }

export interface UnitProps {
    name: string,
    characters: CardProps[],
    include: boolean
}

export interface ControlOptionsProps {
    units: UnitProps[],
    handleChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
}