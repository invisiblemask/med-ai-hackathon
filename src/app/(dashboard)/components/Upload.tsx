import Image from 'next/image'
import React from 'react'

export default function Upload() {
    return (
        <div className='flex flex-col items-center justify-center gap-4'>
            <Image src="/icons/upload-file.svg" alt='uploader' width={1200} height={900} className='w-36 h-44' />
            <h1 className="text-bold text-[28px] text-[#333742]">Upload images</h1>
            <div className='flex flex-row gap-2 text-gray-500'>
                Drag and drop files here or
                <label htmlFor="file" className='bg-gradient-to-br from-teal-500 to-teal-400 bg-clip-text text-transparent cursor-pointer'>
                    <input type="file" id='file' hidden />
                    click to browse
                </label>
            </div>
        </div>
    )
}
