import ImageMorphing from '@/components/bitsketcher_ui/Background/ImageMorphing'
import WaveCard from '@/components/bitsketcher_ui/Card/WaveCard'
import React from 'react'

const page = () => {
  return (
    <div className='w-screen h-screen bg-neutral-500'>
        <ImageMorphing ImageUrl="/logo.png"/>
    </div>
  )
}

export default page