import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import React from "react";
import {NewsModel} from "../../../features/news/news.models";
import {Chip} from "@mui/material";

export interface MediaCard {
    card: NewsModel;
    onClick: (id: string) => void;
}


export const MediaCard: React.FC<MediaCard> = ({card, onClick}) => {
    const getDateFormat = (data:string)=>{
        return new Date(data).toLocaleDateString()
    }
    return (
        <Card sx={{maxWidth: `${33}%`}} id={card.source.id!}>
            <CardMedia
                sx={{height: 140}}
                image={card.urlToImage}
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {card.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {card.description}
                </Typography>
            </CardContent>
            <CardActions style={{display:"flex", flexWrap:"wrap",justifyContent:"space-between"}}>
                <Typography variant="body2" color="text.secondary">
                    {getDateFormat(card.publishedAt)}
                </Typography>
                <Chip label={card.source.name} color="primary" variant="outlined" size={'small'}/>
                <Button style={{flexBasis:`${100}%`,justifyContent:'flex-start'}} size="small" onClick={() => onClick(card.title!)}>Learn More</Button>
            </CardActions>
        </Card>
    );
}