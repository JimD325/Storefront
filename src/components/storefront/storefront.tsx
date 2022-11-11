import {Collections} from './Collection'
import type { RootState } from '../../store'
import { useSelector} from 'react-redux'
import {CurrentCollection} from './currentCollection'






export const Storefront = () => {
  const selectedCollections = useSelector((state: RootState) => state.selectedCollections.selectedCollectionName)
console.log("state on storefront", selectedCollections)

  if(selectedCollections ==='none'){
    return (
    <Collections/>
  )
  } else {
    return(
      <CurrentCollection/>
    )
  }
  
}