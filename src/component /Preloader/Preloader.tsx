import {CircularProgress, Typography} from "@mui/material";
import React from "react";

export const Preloader: React.FC = () => {
    const preloaderStyles = {
        position: 'fixed' as 'fixed',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        backgroundColor:"rgba(98, 98, 98, 0.59)",
        zIndex:99
    }
    return (
        <div style={preloaderStyles}>
            <Typography variant="h3" gutterBottom>
                isLoading
            </Typography>
            <CircularProgress/>
        </div>
    )
}