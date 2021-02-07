import React from 'react';
import {CardHidePropsDefaults, CardProps} from "../../types";
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import "./card.scss";


const MyCard: React.FC<CardProps> = ({characters, pinyin, meaning, type, elementIndex, totalCount, hide= CardHidePropsDefaults}) => {

    // const shouldHide = {...hide, ...CardHidePropsDefaults}

    return (
        <Card variant="outlined" className="card-container">
            <CardContent>
                <Typography color="textSecondary">
                    {elementIndex}/{totalCount}
                </Typography>
                <Typography variant="h1" component="h1" color={"textPrimary"} className={hide.characters ? 'opacity-text' : ""}>
                    {characters}
                </Typography>
                <Typography variant="h4" component="h3" color="textSecondary"  className={hide.pinyin ? 'opacity-text' : ""}>
                     {/*{hide.pinyin  pinyin}*/}
                     {pinyin}
                </Typography>
                <Typography variant="h4" component="h4" className={hide.meaning ? 'opacity-text' : ""}>
                    {meaning}
                    {/*{hide.meaning meaning}*/}
                    <br/>
                    {type}
                    {/*{hide.type type}*/}
                </Typography>
            </CardContent>
            {/*<CardActions>*/}
            {/*    <Button size="small">Learn More</Button>*/}
            {/*</CardActions>*/}
        </Card>
    );
}
export default MyCard