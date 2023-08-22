import {Box, Typography} from "@mui/material";
import React, {useEffect, useState} from "react";
import {useAppSelector} from "../../app/hooks";
import {useFetchNewsQuery} from "../../features/news/news.api.slice";
import {NewsModel} from "../../features/news/news.models";
import Modal from '@mui/material/Modal';

export const News: React.FC = () => {
    const [currentNews, setCurrentNews] = useState<NewsModel | null>();
    const [open, setOpen] = useState<boolean>(false);
    const {data} = useFetchNewsQuery();
    const cardTitle = useAppSelector((state) => state.pageSettings.cardTitle);

    const handleClose = () => {
        setOpen((prev) => !prev)
    }

    useEffect(() => {
        if (data) {
            const card = data.articles.find((item) => item.title === cardTitle);
            setCurrentNews(card!)
        }

    }, [data])
    return (
        <div>
            <Box
                onClick={handleClose}
                component="img"
                sx={{
                    height: 300,
                    width: 300,
                }}
                src={currentNews?.urlToImage}
            />
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box
                    component="img"
                    sx={{
                        height: 600,
                        width: 600,
                    }}
                    src={currentNews?.urlToImage}
                />
            </Modal>
            <Typography variant="h3" gutterBottom>
                {currentNews?.title}
            </Typography>
            <Typography variant="body1" gutterBottom>
                {currentNews?.content}
            </Typography>
        </div>
    )
}