import React from 'react'

const BlogCard = () => {
  return (
    <div className='w-full'>
        <div className='w-full h-96 overflow-hidden rounded-xl'><img className='object-cover h-full w-full' src="/new_york.jpg" alt="New York" /></div>
        <h4 className='font-semibold tracking-tight my-4'>10 European ski destinations you should visit this winter</h4>
        <p className='text-grey'>Jan 12, 2024</p>
    </div>
  )
}

export default BlogCard