// this conditionally renders the colletion of choice in a card layout theme. 
import Grid from '@mui/material/Grid';
import {data} from './data'
import type { RootState } from '../../store'
import { useSelector, useDispatch } from 'react-redux'
import { Card, CardContent, CardMedia, Typography, Button } from '@mui/material';
import { changeSelectedCollection } from '../../features/products/productsSlice';
import {addToCart} from '../../features/cart/cartSlice'


export const CurrentCollection = (props:any) => {
  const selectedCollections = useSelector((state: RootState) => state.selectedCollections.selectedCollectionName)
  const cart = useSelector((state:RootState) => state.cart.itemsInCart)
  const dispatch = useDispatch()
  let filteredData = data.filter(obj => obj.collection === selectedCollections);
  console.log("cart on current collection",cart.length)
  
  return(
    <>
    
    <div className = "collectionNameContainer">
      <h1>{selectedCollections} Collection</h1>
 <Button 
    size="large" 
    color="inherit"
    className = "collectionNameContainerButton" 
        onClick={() => {
          dispatch(changeSelectedCollection('none'))}}
        >
          View Collections↩️
        </Button>

      <Button 
    size="small" 
    color="inherit"
    className = "ViewCart" 
    onClick={() => {
      props.handleOpen()}}
        >
          View Cart🛒({cart.length})
        </Button>
   
    </div>
    
    <Grid container
    
    rowSpacing={0}
    columnSpacing = {3}
    direction="row"
    justifyContent="space-evenly"
    columns={3}
    
    >
      {filteredData.map((object) => {
        return(
          <Card className="filteredCard" raised sx={{ width: 300, height: "auto" }}>
    
            <CardMedia component="img" image={object.image} />
            <CardContent>
              <Typography component="div" align='center'>
                {object.name}
              </Typography>
            </CardContent>

            {/* TODO make the display of add to cart button uniform for all cards */}
            <CardContent>
              <Button 
            variant = "contained"
    size="small" 
    color="inherit"
    className = "collectionNameContainerButton" 
        onClick={() => {
          dispatch(addToCart({
            name: object.name,
            price: object.price,
            quantityOfThisItemInCart: 1,
            image: object.image
          }))}}
        >
          Add to Cart 🛒(0)
        </Button>
            </CardContent>
            
        </Card>
        )
      })}
      </Grid>
    </>
  )
}