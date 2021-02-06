import React from 'react';
import {CardProps} from "../../types";
import Card from "../card2/Card";
import Carousel from 'react-material-ui-carousel';
import {CarouselProps} from 'react-material-ui-carousel';
import './cardCarousel.scss';

const CardCarousel: React.FC<{cardList: CardProps[], carouselOptions?: CarouselProps}> = ({cardList, carouselOptions}) => {
    const randomCardList = cardList.sort(() => Math.random() - 0.5);
    // const randomCardList = cardList
    const count = randomCardList.length;
    return (
        <Carousel indicators={false} autoPlay={false} animation="slide" navButtonsAlwaysVisible={true}>
            {randomCardList.map((word: CardProps, index) => <Card key={index}
                                                                  characters={word.characters}
                                                                  pinyin={word.pinyin}
                                                                  meaning={word.meaning}
                                                                  type={word.type}
                                                                  totalCount={count}
                                                                  elementIndex={index+1}/>)}

        </Carousel>
    )};

export default CardCarousel;