import React, { FunctionComponent } from 'react';

type CardProps = {
  characters: string,
  pinyin: string
  meaning: string
  type?: string
}

const Card: FunctionComponent<CardProps> = ({characters, pinyin, meaning, type}) => (
<div className="card-container">
    <span className="character">{characters}</span>
    <span className="pinyin">{pinyin}</span>
    <span className="meaning">{meaning} ({type})</span>
</div>
)
export default Card