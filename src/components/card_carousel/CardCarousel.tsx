import React from 'react';
import Card from "components/card/Card";
import {CardProps, CardHidePropsDefaults} from "types";
import Carousel, {CarouselProps} from 'react-material-ui-carousel';
import {CardContent, Checkbox, FormControlLabel, Card as MaterialCard} from "@material-ui/core";
import './cardCarousel.scss';


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
            <MaterialCard variant="outlined">
                Should Hide:
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
            </MaterialCard>
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