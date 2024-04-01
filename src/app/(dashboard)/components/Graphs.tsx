import React from 'react'

export default function Graphs() {
  return (
    <div className='lg:grid lg:grid-cols-3 flex flex-col gap-6'>
        <div className="p-6 rounded-2xl h-80 bg-[#F8FAFB]">
            <div className="flex flex-row justify-between">Modality</div>
            <div className="flex justify-center items-center text-base font-bold my-auto h-full">Nothing to show yet</div>
        </div>
        <div className="p-6 rounded-2xl h-80 bg-[#F8FAFB]">
            <div className="flex flex-row justify-between">Body Parts</div>
            <div className="flex justify-center items-center text-base font-bold my-auto h-full">Nothing to show yet</div>
        </div>
        <div className="p-6 rounded-2xl h-80 bg-[#F8FAFB]">
            <div className="flex flex-row justify-between">Storage</div>
            <div className="flex justify-center items-center text-base font-bold my-auto h-full">Nothing to show yet</div>
        </div>
    </div>
  )
}
