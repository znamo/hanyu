import React from 'react';
import {CardProps} from "../../types";
import './card.scss'

const Card: React.FC<CardProps> = ({characters, pinyin, meaning, type}) => (
<div className="card-container">
    <span className="character">{characters}</span>
    <span className="pinyin">{pinyin}</span>
    <span className="meaning">{meaning} ({type})</span>
</div>
)
export default Card