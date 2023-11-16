import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import waterloo from '@/public/waterloo_logo.png'

const ProjectCard = () => {
    return(
        
        <div className='flex'>
                
            <div className='px-5 font-quicksand font-bold bg-gradient-to-r from-teal-600 via-cyan-400 to-violet-800 bg-clip-text text-transparent/[.0]'>
                AWARDS 
            </div>

            {/* Actual Text Below*/}
                

                <div className=''>

                
                {/*/////////////////////////////////////////////////////////*/}


                <Link href='https://www.nserc-crsng.gc.ca/index_eng.asp'>                    
                    
                    <div className='flex justify-between'>
                        <div>
                            <div className='workTitleStyle text-3xl'>
                                NSERC Research Grant
                            </div>
                            <div className='workTitleStyle'>
                                | 09 -- 2023 
                            </div>
                        </div>

                        <div>

                                {/* LOGO in flex */}
                                <div className='relative p-10 align-right'>
                                    <Image 
                                        src={waterloo}
                                        layout='fill'
                                        objectFit='cover'
                                        className='rounded-3xl'
                                        />
                                </div>

                            </div>


                    </div>

                </Link>

                <div className='font-quicksand py-10'>
                    I was awarded $10,000 as a joint grant from the NSERC and from the University of Waterloo's Department of Statistics and Actuarial Sciences, for participating in Prof. Negeri's research on computational methods regarding GLMM likelihood estimation.
                </div>


                {/*/////////////////////////////////////////////////////////*/}


                <Link href='https://uwaterloo.ca/future-students/financing/scholarships/presidents-scholarships'>                    
                    
                    <div className='flex justify-between'>
                        <div>
                            <div className='workTitleStyle text-3xl'>
                                President's Scholarship
                            </div>
                            <div className='workTitleStyle'>
                                | 06 -- 2020
                            </div>
                        </div>

                        <div>

                                {/* LOGO in flex */}
                                <div className='relative p-10 align-right'>
                                    <Image 
                                        src={waterloo}
                                        layout='fill'
                                        objectFit='cover'
                                        className='rounded-3xl'
                                        />
                                </div>

                            </div>


                    </div>

                </Link>

                <div className='font-quicksand py-10'>
                    I was awarded an entrace scholarship of $5000 by the University of Waterloo's admissions board due to my high academic achievement in highschool.
                </div>

                    


                </div>




        </div>
    
    )
}

export default ProjectCard

