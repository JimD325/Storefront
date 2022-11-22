import { CardMedia, CardContent, Typography } from '@mui/material'
import Card from '@mui/material/Card'
import Button from '@mui/material/Button'
import { useSelector, useDispatch } from 'react-redux'
import { incrementAmountInCart, decrementAmountInCart, clearCart } from '../../features/cart/cartSlice'

import type { RootState } from '../../store'

import { ItemInCart } from '../../features/cart/cartSlice'
import { ProductInterface } from './data'


export const CartModal = (props: any) => {
  const cart = useSelector((state: RootState) => state.cart.itemsInCart)
  const dispatch = useDispatch()
  const allProducts = useSelector((state: RootState) => state.selectedCollections.allProducts);

  // if items in cart exceed items in storage, notify the user that there may be delays in shipping those extra items until we get those in stock. 
  // If all items are in stock, remove quantity of items in stock equal to the quantity of items in cart ON SUBMIT 

  const updateOneProduct =
    async (cartItem: ItemInCart, storeItem: ProductInterface) => {
      let newQuanInStore = storeItem.quantityInStock - cartItem.quantityOfThisItemInCart;
      console.log("newQuaninStore", newQuanInStore)
      const reqOptions = {
        method: "PUT",
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          _id: storeItem._id,
          name: storeItem.name,
          image: storeItem.image,
          Collection: storeItem.Collection,
          price: storeItem.price,
          quantityInStock: newQuanInStore,
        })
      };
      console.log("reqOptions.body", reqOptions.body)
      const response = await fetch(`http://localhost:3001/product/${storeItem._id}`, reqOptions)
      const data: ProductInterface = await response.json();
      console.log("Update On Checkout ran", data);
      return data;
    }
    
  const checkoutHandler = () => {
    console.log("cart check on checkout button", cart);
    console.log("allProducts check on checkout button", allProducts);
    //compare each item in cart to each item in all products
    // if name matches and there is enough in stock, update DB to show change in quantity of each item. 
    for (const product of allProducts) {
      for (const cartItem of cart) {
        if (product.name === cartItem.name && product.quantityInStock > cartItem.quantityOfThisItemInCart) {
          console.log("inside the nested fors");
          updateOneProduct(cartItem, product);
        }
        // add additional logic to ensure the user cannot update database to have negative numbers of items in stock. 
      }
    };
    dispatch(clearCart())
    props.handleClose();
  }

  let totalPrice = 0;

  const totalPriceCalc = () => {
    cart.map((item => {
      totalPrice += Math.ceil((item.price * item.quantityOfThisItemInCart) * 100) / 100
    }))
    return Math.ceil(totalPrice)
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
                <Typography component="div" align='left'>
                  Quantity In Stock :{item.quantityInStock}

                </Typography>

              </CardContent>
              <CardContent>
                <Typography component="div" align='left'>
                  Price: ${Math.ceil(item.quantityOfThisItemInCart * item.price * 100) / 100}
                </Typography>
              </CardContent>
              {/* TODO make the display of add to cart button uniform for all cards */}
              <Button onClick={() => {
                dispatch(incrementAmountInCart({
                  name: item.name,
                  price: item.price,
                  quantityOfThisItemInCart: item.quantityOfThisItemInCart,
                  image: item.image,
                  _id: item._id,
                  quantityInStock: item.quantityInStock,
                }))
              }}>
                Add Item</Button>
              <Button onClick={() => {
                dispatch(decrementAmountInCart({
                  name: item.name,
                  price: item.price,
                  quantityOfThisItemInCart: item.quantityOfThisItemInCart,
                  image: item.image,
                  _id: item._id,
                  quantityInStock: item.quantityInStock
                }))
              }}>Remove Item</Button>
            </Card>
          </>
        )
      })}
      <h1>Your Total Price is ${Math.ceil(totalPrice * 100) / 100}</h1>
      <Button onClick={() => checkoutHandler()}>Checkout</Button>
    </>

  )


}