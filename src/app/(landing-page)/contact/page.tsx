import React from 'react'

import { Button } from '@/lib/components/ui/button'
import Analytic from '@/lib/marketing/analytic'
import Contact from '@/lib/pages/contact'
import Eating from '@/lib/product/eat'
// fetching
/**
 * * Todo : bikin fetching
 * ! komentar
 * ? params
 */
const ContactPages = () => {
    return (
        <div>
            <Button variant="link">Shadcn </Button>
            {/* passing props kesini */}
            <Contact />
            <Analytic />
            <Eating />
        </div>
    )
}

export default ContactPages
