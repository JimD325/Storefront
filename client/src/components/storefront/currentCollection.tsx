// this conditionally renders the colletion of choice in a card layout theme. 
import Grid from '@mui/material/Grid';
import { data } from './data'
import type { RootState } from '../../store'
import { useSelector, useDispatch} from 'react-redux'
import { useEffect } from 'react'
import { fetchAllProducts } from '../../features/products/productsSlice'
import { Card, CardContent, CardMedia, Typography, Button } from '@mui/material';
import { changeSelectedCollection } from '../../features/products/productsSlice';
import { addToCart, incrementAmountInCart } from '../../features/cart/cartSlice'
import {ProductInterface} from './data'
import { useAppDispatch } from '../../app/hooks';



export const CurrentCollection = (props: any) => {
  const selectedCollections = useSelector((state: RootState) => state.selectedCollections.selectedCollectionName)
  const cart = useSelector((state: RootState) => state.cart.itemsInCart);
  const allProducts = useSelector((state: RootState) => state.selectedCollections.allProducts);
  const dispatch = useDispatch()

  let filteredData:ProductInterface[] = allProducts.filter((obj) => obj.Collection === selectedCollections);


  const cartItemsCountHandler = () => {
    let cartItemsCount = 0;
    cart.map((obj) => cartItemsCount += obj.quantityOfThisItemInCart)
    return cartItemsCount;
  }
  return (
    <>
      <div className="collectionNameContainer">
        <h1>{selectedCollections} Collection</h1>
        <Button
          size="large"
          color="inherit"
          className="collectionNameContainerButton"
          onClick={() => {
            dispatch(changeSelectedCollection('none'))
          }}
        >
          View Collections↩️
        </Button>
        <Button
          size="small"
          color="inherit"
          className="ViewCart"
          onClick={() => {
            props.handleOpen()
          }}
        >
          View Cart🛒({cartItemsCountHandler()})
        </Button>
      </div>
      <Grid container
        rowSpacing={0}
        columnSpacing={3}
        direction="row"
        justifyContent="space-evenly"
        columns={3}
      >
        {filteredData.map((object) => {
          return (
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
                  variant="contained"
                  size="small"
                  color="inherit"
                  className="collectionNameContainerButton"
                  onClick={(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
                        dispatch(addToCart({
                          name: object.name,
                          price: object.price,
                          quantityOfThisItemInCart: 1,
                          image: object.image
                        }))
                  }}
                >
                  Add to Cart 🛒
                </Button>
              </CardContent>
            </Card>
          )
        })}
      </Grid>
    </>
  )
}