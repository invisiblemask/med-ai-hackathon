import { cards } from '@/lib/constants'
import Image from 'next/image'
import React from 'react'

export default function DashboardCards() {
    return (
        <div className='lg:grid flex flex-col grid-cols-1 lg:grid-cols-4 gap-6'>
            {cards.map((card,index)  => (
            <div className="bg-[#F8FAFB] p-4 flex flex-col gap-5 rounded-lg">
                <h1 className="text-[#5D6883]">{card.title}</h1>
                <div className="flex flex-row justify-between">
                    <h2 className="text-3xl font-bold">{card.value}</h2>
                    <Image src={card?.icon} alt='studies icon' width={400} height={400} className='w-16 h-16' />
                </div>
            </div>
            ))}
        </div>
    )
}
