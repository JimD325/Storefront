import {Collections} from './Collection'
import { useEffect } from 'react'
import type { RootState } from '../../store'
import {CurrentCollection} from './currentCollection'
// modal imports for cart
import * as React from 'react';
import Box from '@mui/material/Box';


import {CartModal} from './CartModal'
import { fetchAllProducts } from '../../features/products/productsSlice'
import { useSelector, useDispatch } from 'react-redux'
import { ProductInterface } from './data'
import { useAppDispatch } from '../../app/hooks';
import Modal from '@mui/material/Modal';


const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
  overflow: "auto"
};

export const Storefront = () => {
  const selectedCollections = useSelector((state: RootState) => state.selectedCollections.selectedCollectionName)
  const dispatch = useAppDispatch()

// modal state 
const [open, setOpen] = React.useState(false);
const handleOpen = () => setOpen(true);
const handleClose = () => setOpen(false);

// api fetchProducts State

useEffect (()=> {
  console.log("selectedCollections on storeFront useEffect", selectedCollections)
  dispatch(fetchAllProducts());

},[dispatch])


  
const cart = useSelector((state:RootState) => state.cart.itemsInCart)


  if(selectedCollections ==='none'){
    return (
      <>
      <Collections handleOpen={handleOpen} />
      <div>
      
      
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <CartModal handleOpen = {handleOpen} handleClose = {handleClose}/>
        </Box>
      </Modal>
    </div>
      </>
    
    
  )
  } else {
    return(
      <>
      <CurrentCollection handleOpen={handleOpen}/>
      
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
        <CartModal/>
        </Box>
      </Modal>
      </>
    )
  }
} 


