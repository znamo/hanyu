import React from 'react';
import {CardProps, CardHidePropsDefaults} from "../../types";
import * as MaterialCard from '@material-ui/core/Card';
import Card from "../card2/Card";
import Carousel from 'react-material-ui-carousel';
import {CarouselProps} from 'react-material-ui-carousel';
import './cardCarousel.scss';
import {CardContent, Checkbox, FormControlLabel} from "@material-ui/core";

const CardCarousel: React.FC<{ cardList: CardProps[], carouselOptions?: CarouselProps }> = ({
                                                                                                cardList,
                                                                                                carouselOptions
                                                                                            }) => {
    const count = cardList.length;

    const [hideFields, setHideFields] = React.useState(CardHidePropsDefaults);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setHideFields({...hideFields, [event.target.name]: event.target.checked});
    };

    return (
        <>
            <MaterialCard.default variant="outlined">
                HIDE
                <CardContent>
                    <FormControlLabel
                        control={<Checkbox checked={hideFields.characters} onChange={handleChange} name="characters"
                                           color="primary"/>} label="Characters"/>
                    <FormControlLabel
                        control={<Checkbox checked={hideFields.pinyin} onChange={handleChange} name="pinyin"
                                           color="primary"/>}
                        label="Pinyin"/>
                    <FormControlLabel
                        control={<Checkbox checked={hideFields.meaning} onChange={handleChange} name="meaning"
                                           color="primary"/>} label="Meaning"/>
                    <FormControlLabel
                        control={<Checkbox checked={hideFields.type} onChange={handleChange} name="type"
                                           color="primary"/>}
                        label="Type"/>

                </CardContent>
            </MaterialCard.default>
            <Carousel indicators={false} autoPlay={false} animation="slide" navButtonsAlwaysVisible={true}>
                {cardList.map((word: CardProps, index) => <Card key={index}
                                                                characters={word.characters}
                                                                pinyin={word.pinyin}
                                                                meaning={word.meaning}
                                                                type={word.type}
                                                                hide={hideFields}
                                                                totalCount={count}
                                                                elementIndex={index + 1}/>)}

            </Carousel>
        </>
    )
};

export default CardCarousel;