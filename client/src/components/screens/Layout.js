import { ListItem, makeStyles,useTheme , Typography, ListItemIcon, ListItemText, List,  Toolbar, AppBar } from "@material-ui/core";
import React, {useEffect, useState} from "react";
import clsx from 'clsx';
import Drawer from '@material-ui/core/Drawer';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import MenuIcon from '@material-ui/icons/Menu';
import IconButton from '@material-ui/core/IconButton';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight'
import { useHistory} from "react-router-dom"
import { format } from "date-fns";

const drawerWidth = 240;



const useStyles = makeStyles((theme) => {
    return{
        page:{
            background: "#f9f9f9",
            width: "100%",
            padding: theme.spacing(3)
        },
        drawer:{
         width: drawerWidth,
         flexShrink: 0
        },
        drawerPaper:{
            width: drawerWidth
        },
        root: {
            display: "flex"
        },
        active:{
            background: "#f4f4f4"
    },   title:{
        padding: theme.spacing(2)}
    // }, appbar:{
    //     width:`calc(100% - ${drawerWidth}px)`
    // } , '
       ,
      toolbar: theme.mixins.toolbar,
      date: {
          flexGrow: 1
      },
      media:{
          height: "20%"
      },
      appBar: {
        transition: theme.transitions.create(['margin', 'width'], {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.leavingScreen,
        }),
      },
      appBarShift: {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: drawerWidth,
        transition: theme.transitions.create(['margin', 'width'], {
          easing: theme.transitions.easing.easeOut,
          duration: theme.transitions.duration.enteringScreen,
        }),
      },
      menuButton: {
        marginRight: theme.spacing(2),
      },
      hide: {
        display: 'none',
      },
      drawerHeader: {
        display: 'flex',
        alignItems: 'center',
        padding: theme.spacing(0, 1),
        // necessary for content to be below app bar
        ...theme.mixins.toolbar,
        justifyContent: 'flex-end',
      },
      content: {
        flexGrow: 1,
        padding: theme.spacing(3),
        transition: theme.transitions.create('margin', {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.leavingScreen,
        }),
        marginLeft: -drawerWidth,
      },
      contentShift: {
        transition: theme.transitions.create('margin', {
          easing: theme.transitions.easing.easeOut,
          duration: theme.transitions.duration.enteringScreen,
        }),
        marginLeft: 0,
      }
 }
})



export default function Layout({children}) {
    const classes = useStyles();
    const history = useHistory();
    const [open, setOpen] = useState(false);
   

    const logOutHandler = () => {
        localStorage.removeItem("authToken")
        history.push("/login")
    }

    const handleDrawerOpen = () => {
        setOpen(true);
      };
    
      const handleDrawerClose = () => {
        setOpen(false);
      };
    
      
  const theme = useTheme();
    
    return (
        <div className={classes.root}>
        <AppBar  position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })} elevation={0}>

           <Toolbar>
           <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, open && classes.hide)}
          >
            <MenuIcon />
          </IconButton>
               <Typography className={classes.date}>
                Today is the {format (new Date(), "do MMMM Y")}
               </Typography>
               <Typography >
                   
               </Typography>
           </Toolbar>
        </AppBar>

        <Drawer     
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}>

        <div className={classes.drawerHeader}>
                <IconButton onClick={handleDrawerClose}>
                    {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
                </IconButton>
                </div>
            <div>
             <Typography variant="h5"className={classes.title}>Cryptocurrency Price Checker</Typography>
            </div>
            <List>
                <ListItem button>
                    <ListItemIcon><ExitToAppIcon/></ListItemIcon>
                    <ListItemText>
                        <Typography onClick={logOutHandler}>
                            Log Out
                        </Typography>
                    </ListItemText>
                </ListItem>
            </List>
        </Drawer>
         <main
        className={clsx(classes.content, {
          [classes.contentShift]: open,
        })}
      ></main>
        <div className={classes.page}>
           <div className={classes.toolbar}></div>
            {children}
        </div>

      </div>

    )
}
