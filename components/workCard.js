import React from 'react'
import Link from 'next/link'

const WorkCard = () => {
    return(
        
        <div className='flex px-5 mr-5'>
                
            <div className='px-5 font-quicksand font-bold bg-gradient-to-r from-teal-600 via-cyan-400 to-violet-800 bg-clip-text text-transparent/[.0]'>
                WORK 
            </div>

            {/* Actual Text Below*/}

            <div className=''>

                <div className='pt-5'>


                    <Link href='https://www.linkedin.com/company/vosyn/about/'>                    
                    
                        <div className='workTitleStyle text-3xl'>
                            Vosyn
                        </div>
                        <div className='workTitleStyle'>
                            | Machine Learning Engineer Intern
                        </div>

                    </Link>

                    <div className='font-quicksand py-10'>
                        Work Description
                    </div>


                    <Link href='https://uwaterloo.ca/scholar/znegeri/home'>

                        <div className='workTitleStyle text-3xl'>
                            Department of Statistics, University of Waterloo
                        </div>
                        <div className='workTitleStyle'>
                            | NSERC Undergraduate Research Assistant
                        </div>

                    </Link>

                    <div className='font-quicksand py-10'>
                        Work Description
                    </div>
                    
                </div>

                

            </div>


        </div>
    
    )
}

export default WorkCard

