import { CardMedia, CardContent, Typography } from '@mui/material'
import Card from '@mui/material/Card'
import Button from '@mui/material/Button'
import { useSelector, useDispatch } from 'react-redux'
import { incrementAmountInCart, decrementAmountInCart } from '../../features/cart/cartSlice'

import type { RootState } from '../../store'

export const CartModal = () => {
  const cart = useSelector((state: RootState) => state.cart.itemsInCart)
  const dispatch = useDispatch()
  console.log("cart on cartModal", cart)

  let totalPrice = 0;

  const totalPriceCalc = () => {
    cart.map((item => {
      totalPrice = Math.ceil(totalPrice + (item.price*item.quantityOfThisItemInCart)*100)/100
    }))
    return totalPrice
  }
  totalPriceCalc();

  return (
    <>
      {cart.map((item) => {
        return (

          <>
            <Card 

            className="filteredCard" 
            raised sx={{ width: 300, height: "auto" }}>

              <CardMedia component="img" image={item.image} />
              <CardContent>
                <Typography component="div" align='left'>
                  {item.name}
                </Typography>
              </CardContent>
              <CardContent>
                <Typography component="div" align='left'>
                  Quantity In Cart :{item.quantityOfThisItemInCart}
                 
                </Typography>
                
              </CardContent>
              <CardContent>
                <Typography component="div" align='left'>
                  Price: ${item.quantityOfThisItemInCart * item.price}
                </Typography>
              </CardContent>
              {/* TODO make the display of add to cart button uniform for all cards */}
             <Button onClick = {() => {dispatch(incrementAmountInCart({
              name: item.name,
              price: item.price,
              quantityOfThisItemInCart: item.quantityOfThisItemInCart,
              image: item.image
             }))}}>
              Add Item</Button>
             <Button onClick = {() => {dispatch(decrementAmountInCart({
              name: item.name,
              price: item.price,
              quantityOfThisItemInCart: item.quantityOfThisItemInCart,
              image: item.image
             }))}}>Remove Item</Button>
            </Card>
          </>
        )
      })}
      <h1>Your Total Price is ${Math.ceil(totalPrice*100)/100}</h1>
    </>
   
  )


}