'use client'

import { Button } from '@/lib/components/ui/button'
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from '@/lib/components/ui/dialog'
// react client components
import { ArrowUpDown, MoreHorizontal } from 'lucide-react'

import type { ColumnDef } from '@tanstack/react-table'

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type Payment = {
    id: string
    amount: number
    status: 'pending' | 'processing' | 'success' | 'failed'
    email: string
}

export const columns: ColumnDef<Payment>[] = [
    {
        accessorKey: 'status',
        header: 'Status',
    },
    {
        accessorKey: 'email',
        header: ({ column }) => {
            return (
                <Button
                    variant="ghost"
                    onClick={() =>
                        column.toggleSorting(column.getIsSorted() === 'asc')
                    }
                >
                    Email
                    <ArrowUpDown className="ml-2 h-4 w-4" />
                </Button>
            )
        },
    },
    {
        accessorKey: 'amount',
        header: () => (
            <div className="border border-b-2 text-right text-blue-100">
                Amount
            </div>
        ),
        cell: ({ row }) => {
            console.log('row', row)

            const amount = parseFloat(row.getValue('amount'))
            const formatted = new Intl.NumberFormat('en-US', {
                style: 'currency',
                currency: 'USD',
            }).format(amount)

            return (
                <div className="text-right font-medium text-red-500 underline">
                    {formatted}
                </div>
            )
        },
    },
    {
        id: 'actions',
        cell: ({ row }) => {
            const dataRow = row.original.email
            return (
                <div>
                    <Dialog>
                        <DialogTrigger>Open</DialogTrigger>
                        <DialogContent>
                            <DialogHeader>
                                <DialogTitle>
                                    Are you absolutely sure?
                                </DialogTitle>
                                <DialogDescription>
                                    This is Email {dataRow}
                                </DialogDescription>
                            </DialogHeader>
                        </DialogContent>
                    </Dialog>
                </div>
            )
        },
    },
]
