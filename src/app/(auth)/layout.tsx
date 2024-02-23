import React from 'react'

const LayoutAuth = ({ children }: { children: React.ReactNode }) => {
    return (
        <>
            {children}
            <div className="flex w-full justify-center items-center text-black">
                Ini Footer
            </div>
        </>
    )
}

export default LayoutAuth
