import React from 'react'
import Image1 from "../../assets/category/earphone.png"
import Image2 from "../../assets/category/watch.png"
import Image3 from "../../assets/category/macbook.png"
import Button from "../Shared/Button"

const Category = () => {
  return (
    <div className='py-8'>
        <div className='container'>
            <div className='grid grid-cols sm:grid-cols-2 lg:grid-cols-4 gap-8'>
                {/* First col */}
                <div className='py-10 pl-5 bg-gradient-to-br from-black/100 to-black/50 text-white rounded-3xl relative h-[320px] flex items-end'>
                    <div>
                        <div className='mb-4'>
                            <p className='mb-[2px] text-primary'>Enjoy</p>
                            <p className='text-2xl font-semibold mb-[2px]'>With</p>
                            <p className='text-4xl xl:text-5xl font-bold opacity-20 mb-2'>Earphone</p>
                            <Button
                            text="Browse"
                            bgColor={"bg-primary"}
                            textColor={"text-white"}
                            />
                        </div>
                    </div>
                    <img src={Image1} alt='' className='w-[320px] absolute bottom-0'/>
                </div>
                {/* Second col */}
                <div className='py-10 pl-5 bg-gradient-to-br from-brandYellow/100 to-brandYellow/50 text-white rounded-3xl relative h-[320px] flex items-end'>
                    <div>
                        <div className='mb-4'>
                            <p className='mb-[2px] text-secondary'>Enjoy</p>
                            <p className='text-2xl font-semibold mb-[2px]'>With</p>
                            <p className='text-4xl xl:text-5xl font-bold opacity-50 mb-2'>Watch</p>
                            <Button
                            text="Browse"
                            bgColor={"bg-primary"}
                            textColor={"text-white"}
                            />
                        </div>
                    </div>
                    <img src={Image2} alt='' className='w-[320px] absolute top-12'/>
                </div>
                {/* Third col */}
                <div className='py-10 pl-5 bg-gradient-to-br from-primary/100 to-primary/50 text-white rounded-3xl relative w-[600px] h-[320px] flex items-end'>
                    <div>
                        <div className='mb-4'>
                            <p className='mb-[2px] text-gray-400'>Enjoy</p>
                            <p className='text-2xl font-semibold mb-[2px]'>With</p>
                            <p className='text-4xl xl:text-5xl font-bold opacity-20 mb-2'>Laptop</p>
                            <Button
                            text="Browse"
                            bgColor={"bg-primary"}
                            textColor={"text-white"}
                            />
                        </div>
                    </div>
                    <img src={Image3} alt='' className='w-[300px] absolute right-10 top-5'/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Category