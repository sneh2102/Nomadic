import React from 'react'
import Navbar from '../components/history/Navbar'
import UserHistory from '../components/history/UserHistory'
import Recommendations from '../components/history/Recommendations'
import Header from '../components/ui/Header'
import { ChakraProvider } from '@chakra-ui/react'
import { Box } from '@mui/material'


const HistoryPage = () => {
    return (
        <div>

            <Header />
            <ChakraProvider >
                <br />
                <br />
                <br />
                <br />
                <UserHistory />
                <Recommendations />
            </ChakraProvider>
        </div>
    )
}

export default HistoryPage