import React from 'react'
import ListingItem from '../ListingItem/ListingItem'
import { Pagination } from '@mui/material'

const Listings = () => {
  return (
    <>
    <div>
        <ListingItem />
        <ListingItem />
        <ListingItem />
        <ListingItem />
        <ListingItem />
    </div>
    <div className='flex justify-end'>
    <Pagination className='mt-4'  count={10} color="primary" />
    </div>
    </>
  )
}

export default Listings