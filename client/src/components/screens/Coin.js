import React from 'react'
import { ListItem, makeStyles, Typography} from "@material-ui/core";


const Coin = ({name, image, symbol, price, volume, priceChange, marketcap}) => {
    
    const useStyles = makeStyles({
        
          media:{
              height: "10rem",
              justifyContent: "center"
          },
       name:{
           padding: "10px",
           fontWeight: "bold",
           justifyContent: "center"
       }


    })
      
    const classes = useStyles();
    return (
        <div>
      
          
            <img src={image} alt="crypto" className={classes.media}/>
            <Typography variant="h3">{name}</Typography>
            {/* <Typography variant="h5">{symbol}</Typography> */}
            <div>
                <Typography variant ="h5" className={classes.name}>Current Price: ${price}</Typography>
                <Typography className={classes.name}> Total Volume: ${volume.toLocaleString()}</Typography>
                {priceChange < 0 ? (
                    <Typography className={classes.name}>Market Index: {priceChange.toFixed(2)}%</Typography>
                ):(
                    <Typography className={classes.name}>Market Index: {priceChange.toFixed(2)}%</Typography>
                )}
                <Typography className={classes.name}> Mkt Cap: ${marketcap.toLocaleString()}</Typography>
           
            </div>
            
       
        </div>
    )
}

export default Coin
