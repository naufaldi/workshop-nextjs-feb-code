import React from 'react'

const LayoutBlog = ({ children }: { children: React.ReactNode }) => {
    return (
        <>
            <div className="w-full mx-auto px-2 py-4 text-black">
                Navigation
            </div>
            {children}
        </>
    )
}

export default LayoutBlog
