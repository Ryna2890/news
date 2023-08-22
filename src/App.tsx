import {ThemeProvider} from '@mui/material/styles';
import {createTheme} from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import './App.css';
import ResponsiveDrawer from "./component /ResponsiveDrawer/ResponsiveDrawer";
import {useAppSelector} from "./app/hooks";
import {useMemo} from "react";
import {useMediaQuery} from "@mui/material";


function App() {
    const theme = useAppSelector((state) => state.pageSettings.theme);
    const prefersDarkMode = useMediaQuery(`${theme.mode === 'darkTheme' ? '(prefers-color-scheme: dark)' : '(prefers-color-scheme: light)'}`);

    const themeSite = useMemo(
        () =>
            createTheme({
                palette: {
                    mode: prefersDarkMode ? 'dark' : 'light',

                },
                typography: {
                    subtitle1: {
                        fontSize: Number(`${theme.font === 'big' ? 24 : 12}`),
                    },
                    body1: {
                        fontSize: Number(`${theme.font === 'big' ? 24 : 12}`),
                    }
                },
            }),
        [prefersDarkMode,theme],
    );
    return (
        <ThemeProvider theme={themeSite}>
            <CssBaseline/>
            <ResponsiveDrawer/>
        </ThemeProvider>

    );
}

export default App;
