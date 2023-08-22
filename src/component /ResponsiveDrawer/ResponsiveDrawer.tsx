import {
    AppBar,
    createTheme,
    CssBaseline,
    Divider,
    Drawer,
    Hidden, IconButton,
    List,
    ListItem,
    ListItemIcon,
    ListItemText, Theme, ThemeProvider,
    Toolbar
} from "@mui/material";
import {useState} from "react";
import {AttachEmail, Attractions, Menu} from "@mui/icons-material";
import {Link, Outlet} from "react-router-dom";
import {navPanel} from "./constants";

const drawerWidth = 240;

const useStyles = (theme: Theme) => ({
    root: {
        display: "flex"
    },
    drawer: {
        [theme.breakpoints.up("sm")]: {
            width: drawerWidth,
            flexShrink: 0
        }
    },
    appBar: {
        [theme.breakpoints.up("sm")]: {
            width: `calc(100% - ${drawerWidth}px)`,
            marginLeft: drawerWidth
        }
    },
    menuButton: {
        marginRight: theme.spacing(2),
        [theme.breakpoints.up("sm")]: {
            display: "none"
        }
    },
    toolbar: theme.mixins.toolbar,
    drawerPaper: {
        width: drawerWidth
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
        marginLeft: drawerWidth,
        [theme.breakpoints.up("sm")]: {
            marginLeft: 0,
        }
    }
});

function ResponsiveDrawer() {
    const theme = createTheme();
    const classes = useStyles(theme);
    const [mobileOpen, setMobileOpen] = useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const drawer = (
        <div>
            <div style={classes.toolbar}/>
            <Divider/>
            <List>
                {navPanel.map((item, index) => (
                    <ListItem key={index}>
                        <ListItemIcon>
                            {index % 2 === 0 ? <Attractions/> : <AttachEmail/>}
                        </ListItemIcon>
                        <Link to={item.link}>
                            <ListItemText primary={item.title}/>
                        </Link>
                    </ListItem>
                ))}
            </List>
            <Divider/>
        </div>
    );

    const container = document.documentElement;

    return (
            <div style={classes.root}>
                <CssBaseline/>
                <AppBar position="fixed" style={classes.appBar}>
                    <Toolbar>
                        <IconButton
                            color="inherit"
                            aria-label="open drawer"
                            edge="start"
                            onClick={handleDrawerToggle}
                            style={classes.menuButton}
                        >
                            <Menu/>
                        </IconButton>
                    </Toolbar>
                </AppBar>
                <nav style={classes.drawer} aria-label="mailbox folders">
                    <Hidden smUp implementation="css">
                        <Drawer
                            container={container}
                            variant="temporary"
                            anchor="right"
                            open={mobileOpen}
                            onClose={handleDrawerToggle}
                            sx={{
                                display: {xs: 'block', sm: 'none'},
                                '& .MuiDrawer-paper': {width: drawerWidth, flexShrink: 0}
                            }}
                            ModalProps={{
                                keepMounted: true
                            }}
                        >
                            {drawer}
                        </Drawer>
                    </Hidden>
                    <Hidden xsDown implementation="css">
                        <Drawer
                            sx={{display: {xs: 'none', sm: 'block'}, '& .MuiDrawer-paper': {width: drawerWidth},}}
                            variant="permanent"
                            open
                        >
                            {drawer}
                        </Drawer>
                    </Hidden>
                </nav>
                <main style={classes.content}>
                    <div style={classes.toolbar}/>
                    <Outlet/>
                </main>
            </div>
    );
}


export default ResponsiveDrawer;