import type { RootState } from '../../store'
import Grid from '@mui/material/Grid';
import { Card, CardContent, Typography, CardMedia,  Button } from "@mui/material";
import './storefront.css'
import { changeSelectedCollection } from '../../features/products/productsSlice'
import { useSelector, useDispatch } from 'react-redux'
import axios from 'axios';


export interface CollectionInterface {
  image: string,
  name: string
}






export const Collections = (props:any) => {
  // const selectedCollections = useSelector((state: RootState) => state.selectedCollections.selectedCollectionName)
  const dispatch = useDispatch()
  const cart = useSelector((state:RootState) => state.cart.itemsInCart)

  const cartItemsCountHandler = () => {
    let cartItemsCount = 0;
    cart.map((obj) => cartItemsCount += obj.quantityOfThisItemInCart)
    return cartItemsCount;
  }



 

  return (
    <>
    <div className = "collectionNameContainer">
      <h1>Browse Collections</h1>
    <Button 
    size="small" 
    color="inherit"
    className = "collectionNameContainerButton" 
        onClick={() => {
          props.handleOpen()}}
        >
          Cart🛒({cartItemsCountHandler()})
        </Button>
    </div>
    
    <div className="collectionGridContainer">
      <Grid container
        spacing={3}
        direction="row"
        justifyContent="space-evenly"
        columns={3}>
        
        <Button size="large" color="inherit" onClick={() => {dispatch(changeSelectedCollection('Cabo'));
  }} >
          <Card raised sx={{ width: 300, height: "auto" }}>
         
              <CardMedia component="img" image='https://static.wixstatic.com/media/ac9cb6_ed90d7371f9d4ee6b80cf5518233af42~mv2.png/v1/fill/w_525,h_525,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/PNG%20image-7C606F8E5C8A-1.png' />
              <CardContent>
                <Typography component="div" align='center'>
                  Cabo Collection
                </Typography>
              </CardContent>
            
          </Card>
        </Button>
        <Button size="large" color="inherit" 
        onClick={() => {
          dispatch(changeSelectedCollection('Tahoe'))}}
        >
        <Card raised sx={{ width: 300, height: "auto" }}>
    
            <CardMedia component="img" image='https://static.wixstatic.com/media/ac9cb6_1eed7fb3249f4778ade9d5977022732e~mv2.png/v1/fill/w_525,h_525,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/tahoe%20heartbeat%20Front%20page%20new.png' />
            <CardContent>
              <Typography component="div" align='center'>
                Tahoe Collection
              </Typography>
            </CardContent>
          
        </Card>
        </Button>
        <Button size="large" color="inherit"
        onClick={() => {
          dispatch(changeSelectedCollection('Surf'))}} >
        <Card raised sx={{ width: 300, height: "auto" }}>
          
            <CardMedia component="img" image='https://static.wixstatic.com/media/ac9cb6_d7dc865729554d98819da95799b54993~mv2.png/v1/fill/w_525,h_525,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/ac9cb6_d7dc865729554d98819da95799b54993~mv2.png' />
            <CardContent>
              <Typography component="div" align='center'>
                Surf Collection
              </Typography>
            </CardContent>
        </Card>
        </Button>
      </Grid>
    </div>

    </>
    
  )

}
