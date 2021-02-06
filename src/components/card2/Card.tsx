import React from 'react';
import {CardProps} from "../../types";
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import "./card.scss";


const MyCard: React.FC<CardProps> = ({characters, pinyin, meaning, type, elementIndex, totalCount}) => (
    <Card variant="outlined" className="card-container">
        <CardContent>
            <Typography color="textSecondary">
                {elementIndex}/{totalCount}
            </Typography>
            <Typography variant="h2" component="h2">
                {characters}
            </Typography>
            <Typography color="textSecondary" component="p">
                {pinyin}
            </Typography>
            <Typography variant="body2" component="p">
                {meaning}
                <br/>
                ({type})
            </Typography>
        </CardContent>
        {/*<CardActions>*/}
        {/*    <Button size="small">Learn More</Button>*/}
        {/*</CardActions>*/}
    </Card>
);
export default MyCard