import React, {useState} from "react";
import {Box, FormControl, InputLabel, MenuItem, Select, SelectChangeEvent, Typography} from "@mui/material";
import {useAppSelector} from "../../app/hooks";
import {useDispatch} from "react-redux";
import {perPage, siteFont, siteTheme} from "../../features/pageSettings/pageSettings";

export const Settings: React.FC = () => {
    const initialPerPage = useAppSelector((state)=>state.pageSettings.perPage);
    const initialTheme = useAppSelector((state)=>state.pageSettings.theme);
    const [changePerPage, setChangePerPage] = useState<string>(initialPerPage.toString());
    const [changeTheme, setChangeTheme] = useState<string>(initialTheme.mode);
    const [changeFont, setChangeFont] = useState<string>(initialTheme.font);
    const dispatch = useDispatch();
    const handlePerPageChange = (e: SelectChangeEvent<string>) => {
        const target = e.target.value;
        setChangePerPage(target);
        dispatch(perPage(Number(target)));
    }

    const handleThemeChange = (e: SelectChangeEvent<string>) => {
        const target = e.target.value;
        setChangeTheme(target);
        dispatch(siteTheme(target));
    }

    const handleFontChange = (e: SelectChangeEvent<string>) => {
        const target = e.target.value;
        setChangeFont(target);
        dispatch(siteFont(target));
    }

    return (
        <div style={{display:'flex', gap:40}}>
            <Box component={'div'}>
                <Typography variant="body1" gutterBottom>
                    Выберите число отображаемых новостей на странице
                </Typography>
                <FormControl fullWidth style={{marginBottom: 30}}>
                    <InputLabel id="demo-simple-select-label">Число</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        label="Число"
                        onChange={handlePerPageChange}
                        value={changePerPage}
                    >
                        <MenuItem value={6}>6</MenuItem>
                        <MenuItem value={12}>12</MenuItem>
                        <MenuItem value={24}>24</MenuItem>
                    </Select>
                </FormControl>
            </Box>
            <Box component={'div'}>
                <Typography variant="body1" gutterBottom>
                    Выберите тему
                </Typography>
                <FormControl fullWidth style={{marginBottom: 30}}>
                    <InputLabel id="demo-simple-select-label">Тема</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        label="Тема"
                        onChange={handleThemeChange}
                        value={changeTheme}
                    >
                        <MenuItem value={'lightTheme'}>Светлая</MenuItem>
                        <MenuItem value={'darkTheme'}>Темная</MenuItem>
                    </Select>
                </FormControl>
            </Box>
            <Box component={'div'}>
                <Typography variant="body1" gutterBottom>
                    Размер шрифта
                </Typography>
                <FormControl fullWidth style={{marginBottom: 30}}>
                    <InputLabel id="demo-simple-select-label">Шрифт</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        label="Тема"
                        onChange={handleFontChange}
                        value={changeFont}
                    >
                        <MenuItem value={'big'}>Больше</MenuItem>
                        <MenuItem value={'small'}>Меньше</MenuItem>
                    </Select>
                </FormControl>
            </Box>
        </div>
    )
}