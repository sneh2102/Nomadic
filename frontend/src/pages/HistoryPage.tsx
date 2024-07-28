import React from 'react'
import Navbar from '../components/history/Navbar'
import UserHistory from '../components/history/UserHistory'
import Recommendations from '../components/history/Recommendations'
import Header from '../components/ui/Header'


const HistoryPage = () => {
    return (
        <div>

            {/* <Header /> */}
            <UserHistory />
            <Recommendations />
        </div>
    )
}

export default HistoryPage