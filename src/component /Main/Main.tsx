import React, { useEffect, useMemo, useState} from "react";
import {useFetchNewsQuery} from "../../features/news/news.api.slice";
import {NewsModel} from "../../features/news/news.models";
import {MediaCard} from "./MediaCard/MediaCard";
import {FormControl, InputLabel, Pagination, Select, SelectChangeEvent} from "@mui/material";
import {useAppSelector} from "../../app/hooks";
import {Preloader} from "../Preloader/Preloader";
import {MenuItem} from "@mui/material";
import {sort} from "../../helpers/helpers";
import {useDispatch} from "react-redux";
import {cardTitle} from "../../features/pageSettings/pageSettings";
import {useNavigate} from "react-router";

export const Main: React.FC = () => {
    const [movieCard, setMovieCard] = useState<NewsModel[]>([]);
    const [currentPage, setCurrentPage] = useState<number>(1);
    const [count, setCount] = useState<number>(0);
    const [selectValue, setSelectValue] = useState<string>('');

    const {data: newsData, isLoading} = useFetchNewsQuery();
    const perPage = useAppSelector((state) => state.pageSettings.perPage);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const getCurrentData = (data: NewsModel[], page: number) => {
        const begin = (page - 1) * perPage;
        const end = begin + perPage;
        setMovieCard(data.slice(begin, end));
    }


    const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
        setCurrentPage(value);
    };

    const handleSortChange = (e: SelectChangeEvent<string>) => {
        const target = e.target.value
        setSelectValue(target)
        const newData = sort(movieCard, !target);
        getCurrentData(newData, currentPage)
    }

    const getCurrentId = (title: string) => {
        dispatch(cardTitle(title))
        navigate('/news')
    }

    const getMediaCard = useMemo(() => {
        return movieCard?.map((item, index) =>
            <MediaCard key={index} card={item} onClick={getCurrentId}/>
        )
    }, [movieCard])

    useEffect(() => {
        if (newsData && !isLoading) {
            getCurrentData(newsData.articles, currentPage);
            setCount(Math.round(newsData.articles.length / perPage))
        }
    }, [newsData, isLoading, currentPage, perPage]);


    return <>
        {isLoading && <Preloader/>}
        <div style={{display: "flex", flexWrap: 'wrap', width: `${100}%`, gap: 4}}>
            <FormControl fullWidth style={{marginBottom: 30}}>
                <InputLabel id="demo-simple-select-label">Сортировать по дате</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    label="Сортировать по дате"
                    onChange={handleSortChange}
                    value={selectValue}
                >
                    <MenuItem value={1}>По убыванию</MenuItem>
                    <MenuItem value={0}>По возврастанию</MenuItem>
                </Select>
            </FormControl>
            {getMediaCard}
        </div>
        <Pagination count={count} page={currentPage} onChange={handleChange}/>
    </>
}