type Payment = {
    id: string
    amount: number
    status: 'pending' | 'processing' | 'success' | 'failed' | 'completed'
    email: string
}

const payments: Payment[] = [
    {
        id: 'e0dbc7d4',
        amount: 158,
        status: 'completed',
        email: 'user45@example.com',
    },
    {
        id: 'ea24fb29',
        amount: 60,
        status: 'failed',
        email: 'user82@example.com',
    },
    {
        id: 'aa1db46d',
        amount: 117,
        status: 'completed',
        email: 'user70@example.com',
    },
    {
        id: '209baa0f',
        amount: 102,
        status: 'processing',
        email: 'user24@example.com',
    },
    {
        id: '54cf9813',
        amount: 127,
        status: 'completed',
        email: 'user47@example.com',
    },
    {
        id: '44fffd07',
        amount: 91,
        status: 'completed',
        email: 'user44@example.com',
    },
    {
        id: '85777092',
        amount: 68,
        status: 'processing',
        email: 'user33@example.com',
    },
    {
        id: '20d04698',
        amount: 190,
        status: 'processing',
        email: 'user7@example.com',
    },
    {
        id: '01b37e7f',
        amount: 108,
        status: 'processing',
        email: 'user96@example.com',
    },
    {
        id: '12e07209',
        amount: 106,
        status: 'pending',
        email: 'user83@example.com',
    },
    {
        id: '5d8b2546',
        amount: 60,
        status: 'processing',
        email: 'user57@example.com',
    },
    {
        id: 'afa7749b',
        amount: 56,
        status: 'pending',
        email: 'user21@example.com',
    },
    {
        id: '5012c5d5',
        amount: 195,
        status: 'completed',
        email: 'user96@example.com',
    },
    {
        id: 'acb2beec',
        amount: 169,
        status: 'pending',
        email: 'user87@example.com',
    },
    {
        id: '1a901977',
        amount: 160,
        status: 'processing',
        email: 'user72@example.com',
    },
    {
        id: '68b37def',
        amount: 89,
        status: 'completed',
        email: 'user11@example.com',
    },
    {
        id: 'cbc622e2',
        amount: 62,
        status: 'failed',
        email: 'user94@example.com',
    },
    {
        id: 'b1165235',
        amount: 62,
        status: 'pending',
        email: 'user66@example.com',
    },
    {
        id: 'a5158f3a',
        amount: 95,
        status: 'failed',
        email: 'user97@example.com',
    },
    {
        id: 'e7a6153f',
        amount: 124,
        status: 'failed',
        email: 'user72@example.com',
    },
]

export default payments
