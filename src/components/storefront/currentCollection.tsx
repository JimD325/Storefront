// this conditionally renders the colletion of choice in a card layout theme. 
import Grid from '@mui/material/Grid';
import {data} from './data'
import type { RootState } from '../../store'
import { useSelector, useDispatch } from 'react-redux'
import { Card, CardContent, CardMedia, Typography, Button } from '@mui/material';
import { changeSelectedCollection } from '../../features/products/productsSlice';

export const CurrentCollection = () => {
  const selectedCollections = useSelector((state: RootState) => state.selectedCollections.selectedCollectionName)
  const dispatch = useDispatch()
  let filteredData = data.filter(obj => obj.collection === selectedCollections);
  console.log('selectedCollections on current collection', selectedCollections);
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
          
        </Card>
        )
      })}
      
      </Grid>
    </>
  )
}