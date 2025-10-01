import React from 'react'

const FooterLinks =[
    {
        title: 'Home',
        link: '/#',
    },
    {
        title: 'About',
        link: '/#about',
    },
    {
        title: 'Contact',
        link: '/#contact',
    },
    {
        title: 'Blog',
        link: '/#blog',
    },
]

const Footer = () => {
  return (
    <div className='dark:bg-gray-950'>
        <div className="container">
            <div className="grid md:grid-cols-3 pb-20 pt-5 ">
                <div className='py-8 px-4'>
                    <a href='#' className='font-semibold tracking-widest'><span className='text-primary text-2xl'>E</span><span className='text-brandYellow'>lectra</span><span className='text-brandGreen text-2xl'>H</span><span className='text-brandBlue'>ub</span></a>
                    <p className='text-gray-600 dark:text-white/70 lg:pr-24 pt-3 '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis iure asperiores assumenda facilis voluptatibus amet.</p>
                    <p className='text-gray-500 mt-4'>Made with by The Coding Journey</p>
                    <a href='#' target='_blank' className='inline-block bg-primary/90 text-white py-2 px-4 mt-4 text-sm rounded-full '>Visite Our YouTube Channel </a>
                </div>

                <div className='col-span-2 grid grid-cols-2 sm:grid-cols-3 md-pl-10'>
                    <div className="py-8 px-4">
                        <h1 className='text-xl font-bold sm:text-left mb-3'>Important Links</h1>
                        <ul className='space-y-3'>
                            {
                                FooterLinks.map(
                                    (data, index) => (
                                        <li key={index}>
                                            <a href={data.link} className='text-gqray-600 dark:text-gray-400 hover:dark:text-white hover:text-black duration-300 '>
                                                {data.title}
                                            </a>
                                        </li>
                                    )
                                )
                            }
                        </ul>
                    </div>
                </div>

                <div className='col-span-2 grid grid-cols-2 sm:grid-cols-3 md-pl-10'>
                    <div className="py-8 px-4">
                        <h1 className='text-xl font-bold sm:text-left mb-3'>Important Links</h1>
                        <ul className='space-y-3'>
                            {
                                FooterLinks.map(
                                    (data, index) => (
                                        <li key={index}>
                                            <a href={data.link} className='text-gqray-600 dark:text-gray-400 hover:dark:text-white hover:text-black duration-300 '>
                                                {data.title}
                                            </a>
                                        </li>
                                    )
                                )
                            }
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer