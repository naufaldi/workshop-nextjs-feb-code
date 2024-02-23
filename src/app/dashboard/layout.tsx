import React from 'react'

import Header from '@/lib/components/layout/header'

const LayoutDashboard = ({ children }: { children: React.ReactNode }) => {
    return (
        <>
            <Header />
            {children}
        </>
    )
}

export default LayoutDashboard
