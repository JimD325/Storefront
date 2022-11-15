import {Collections} from './Collection'
import type { RootState } from '../../store'
import { useSelector} from 'react-redux'
import {CurrentCollection} from './currentCollection'
// modal imports for cart
import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import {CartModal} from './CartModal'


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
console.log("state on storefront", selectedCollections)

// modal state 
const [open, setOpen] = React.useState(false);
const handleOpen = () => setOpen(true);
const handleClose = () => setOpen(false);

const cart = useSelector((state:RootState) => state.cart.itemsInCart)
console.log("cart on storefront", cart);

  if(selectedCollections ==='none'){
    return (
      <>
      <Collections handleOpen={handleOpen}/>
      <div>
      <Button onClick={handleOpen}>Open modal</Button>
      
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
    </div>
      </>
    
    
  )
  } else {
    return(
      <>
      <CurrentCollection handleOpen={handleOpen}/>
      <Button onClick={handleOpen}>Open modal</Button>
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