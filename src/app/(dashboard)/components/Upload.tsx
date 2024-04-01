"use client"

import { Button, Progress } from '@nextui-org/react';
import axios, { AxiosRequestConfig } from 'axios';
import Image from 'next/image';
import React, { useState } from 'react';

const Upload: React.FC = () => {
  const [imageData, setImageData] = useState<any>(null);
  const [prompt, setPrompt] = useState<string>('');
  const [analysisResult, setAnalysisResult] = useState(null)

  const [uploadProgress, setUploadProgress] = useState<number>(0);

  const handleFileUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const uploadedImageData = e.target?.result;
        setImageData(uploadedImageData);
      };
      reader.readAsDataURL(file);
    }
  };

  const handlePromptChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setPrompt(event.target.value);
  };

  const handleAnalyseClick = async () => {
    if (prompt) {
      try {
        const response = await axios.post(
          'https://api.ydc-index.io/search',
          {
            query: prompt,
          },
          {
            headers: {
              'Content-Type': 'application/json',
              'X-RapidAPI-Key': 'f1c6d7ad13msh2261f46ac393ab6p119676jsn404f6be01e52',
              'X-RapidAPI-Host': 'you-com.p.rapidapi.com',
            },
          }
        );
        setAnalysisResult(response.data);
        console.log(response.data);
      } catch (error) {
        console.error('Error analysing image:', error);
      }
    } else {
      console.error('Please type a prompt before analysing.');
    }
  };


  return (
    <form className='flex flex-col items-center justify-center gap-4'>
      <Image src="/icons/upload-file.svg" alt='uploader' width={1200} height={900} className='w-36 h-44' />
      <h1 className="text-bold text-[28px] text-[#333742]">Upload images</h1>
      <div className='flex flex-row gap-2 text-gray-500'>
        Drag and drop files here or
        <label htmlFor="file" className='bg-gradient-to-br from-teal-500 to-teal-400 bg-clip-text text-transparent cursor-pointer'>
          <input type="file" id='file' hidden onChange={handleFileUpload} />
          click to browse
        </label>
      </div>
      {uploadProgress > 0 && uploadProgress < 100 && <Progress value={uploadProgress} />}
      <textarea rows={4} value={prompt} onChange={handlePromptChange} placeholder="Type prompt..." />
      <Button color="primary" className='self-end mt-8' onClick={handleAnalyseClick}>Analyse</Button>
      {analysisResult && <div className="mt-4">{analysisResult}</div>}
    </form>
  );
};

export default Upload;
