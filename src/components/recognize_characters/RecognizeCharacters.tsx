import React, {useState, FC} from 'react';
import units from 'state';
import CardCarousel from "components/card_carousel/CardCarousel";
import ControlOptions from "components/control_options/ControlOptions";
import {CardProps, UnitProps} from "types";
import {Grid} from "@material-ui/core";


const RecognizeCharacters: FC<{}> = () => {

    const unitsWithIncludeFlag = units.map(obj => ({...obj, include: false}));
    const [includedUnits, setIncludedUnits] = useState(unitsWithIncludeFlag);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        let newState = includedUnits.map(el => {
            if (el.name === event.target.name) {
                el.include = event.target.checked
            }
            return el
        });
        setIncludedUnits(newState)
    };

    const cardList = includedUnits.reduce<CardProps[]>((acc, cur: UnitProps) => cur.include ? [...acc, ...cur.characters] : acc, []);
    const randomCardList = cardList.sort(() => Math.random() - 0.5);

    return (
        <Grid container spacing={1}>
            <Grid item xs={12} sm={4}>
                <ControlOptions units={includedUnits} handleChange={handleChange}/>
            </Grid>
            <Grid item xs={12} sm={8}>
                <div className="App">
                    <CardCarousel cardList={randomCardList}/>
                </div>
            </Grid>
        </Grid>
    )
}

export default RecognizeCharacters