import React from "react";

export interface CardProps {
  characters: string,
  pinyin: string
  meaning: string
  type?: string,
  elementIndex?: number,
  totalCount?: number
}

// export interface CardListProps {
//   cardList: CardProps[]
// }

export interface UnitProps{
  name: string,
  characters: CardProps[],
  include: boolean
}

export interface ControlOptionsProps{
  units: UnitProps[],
  handleChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
}