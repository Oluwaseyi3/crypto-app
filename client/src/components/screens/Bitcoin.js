import axios from 'axios';
import React, {useEffect, useState} from 'react'
import { useHistory} from "react-router-dom"
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import {Container, Grid, makeStyles, Paper, useTheme} from "@material-ui/core";
import Coin from "./Coin"




export default function Bitcoin() {
    const history = useHistory();
    const [coins, setCoin] = useState([])
    const [search, setSearch] = useState("")


     const useStyles = makeStyles((theme) => {
         return{
            root:{
                display: "flex",
                justifyContent: "center",
                height: "1",
                padding: theme.spacing(2)
            },
            coin:{
                
              justifyContent: "center",
              padding: theme.spacing(4)
            },
            search:{
              
                padding: theme.spacing(4),
              justifyContent: "right",
            }
         }
         
     })
         
   
  
        const handleChange = (e) => {
         setSearch(e.target.value)
        }
    
        useEffect(() => {
            try {
                async function GetCoin() {
                    const response = await axios.get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false")
                    setCoin(response.data)
                    console.log(response.data);
                }
                GetCoin()
            } catch (error) {
                console.log(error);
            }
          
            }, [])
            const classes = useStyles();

            const filiteredCoins= coins.filter(coin =>
                coin.name.toLowerCase().includes(search.toLocaleLowerCase())
            )
    return (
        <div>
            <div  justifyContent="flex-start">
            <h1>Search a currency</h1>
            <form >
             <Input type="text" placeholder="Search" onChange={handleChange}/>
            </form>
            </div>
          
           
            {filiteredCoins.map(coin => {
              return(
                
                 <Container className={classes.root} lg={12} >
                 <Grid className={classes.root} item lg={12} md={4}>
                 <Paper className={classes.coin}>
                  <Coin key={coin.id}
                   name={coin.name} 
                   image={coin.image} 
                    symbol={coin.symbol}
                  marketcap={coin.market_cap}
                  price={coin.current_price}
                  priceChange={coin.price_change_percentage_24h}
                  volume={coin.total_volume}
                  
                   />
                  </Paper>
                </Grid>
               </Container>
              )
            })}
          
         
        </div>
    )
}
