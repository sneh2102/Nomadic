import { Pagination } from '@mui/material'
import ListingItem from '../ListingItem/ListingItem'
import { useContext } from 'react'
import { ListingsStateContext } from '../../providers/ListingsStateProvider'

const Listings = () => {
  const {listingsData} = useContext(ListingsStateContext)
  return (
    <>
    <div>
        {
          listingsData.map((listing: any) => (
            <ListingItem key={listing.id} listing={listing} />
          ))
        }
    </div>
    <div className='flex justify-end'>
    <Pagination className='mt-4'  count={10} color="primary" />
    </div>
    </>
  )
}

export default Listings