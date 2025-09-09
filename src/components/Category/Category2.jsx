
import React from 'react'
import Image1 from "../../assets/category/gaming.png"
import Image2 from "../../assets/category/vr.png"
import Image3 from "../../assets/category/speaker.png"
import Button from "../Shared/Button"

const Category = () => {
  return (
    <div className='py-8'>
        <div className='container'>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8'>
                {/* First col */}
                <div className='col-span-2 py-10 pl-5 bg-gradient-to-br from-gray-500 to-brandWhite/70 text-white rounded-3xl relative w-[600px] h-[320px] flex items-end'>
                    <div>
                        <div className='mb-4'>
                            <p className='mb-[2px] text-gray-400'>Enjoy</p>
                            <p className='text-2xl font-semibold mb-[2px]'>With</p>
                            <p className='text-4xl xl:text-5xl font-bold opacity-30 mb-2'>Gamming</p>
                            <Button
                            text="Browse"
                            bgColor={"bg-primary"}
                            textColor={"text-white"}
                            />
                        </div>
                    </div>
                    <img src={Image1} alt='' className='w-[250px] absolute right-10 top-5'/>
                </div>
                {/* Second col */}
                <div className='py-10 pl-5 bg-gradient-to-br from-brandGreen/100 to-brandGreen/50 text-white rounded-3xl relative h-[320px] flex items-end'>
                    <div>
                        <div className='mb-4'>
                            <p className='mb-[2px] text-gray-400'>Enjoy</p>
                            <p className='text-2xl font-semibold mb-[2px]'>With</p>
                            <p className='text-4xl xl:text-5xl font-bold opacity-30 mb-2'>Gadget</p>
                            <Button
                            text="Browse"
                            bgColor={"bg-primary"}
                            textColor={"text-white"}
                            />
                        </div>
                    </div>
                    <img src={Image2} alt='' className='w-[200px] absolute top-10 right-0'/>
                </div>
                {/* Third col */}
                <div className='py-10 pl-5 bg-gradient-to-br from-brandBlue/100 to-brandBlue/50 text-white rounded-3xl relative h-[320px] flex items-end'>
                    <div>
                        <div className='mb-4'>
                            <p className='mb-[2px] text-gray-400'>Enjoy</p>
                            <p className='text-2xl font-semibold mb-[2px]'>With</p>
                            <p className='text-4xl xl:text-5xl font-bold opacity-30 mb-2'>Speaker</p>
                            <Button
                            text="Browse"
                            bgColor={"bg-primary"}
                            textColor={"text-white"}
                            />
                        </div>
                    </div>
                    <img src={Image3} alt='' className='w-[170px] absolute top-12 right-0'/>
                </div>
                
            </div>
        </div>
    </div>
  );
};

export default Category