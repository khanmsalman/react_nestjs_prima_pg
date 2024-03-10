import React from 'react'
import { Footer, Header } from './components'
import { Outlet } from 'react-router'


const Layout = () => {
    return (
        <div>
            <Header />
            <div className="min-h-[90vh]">
                <Outlet />
            </div>
            <Footer />
        </div>
    )
}

export default Layout