import Link from 'next/link'
import React from 'react'

const AboutCard = () => {
    return(
        <div className='flex'>
                
            <div className='px-5 font-quicksand font-bold bg-gradient-to-r from-teal-400 via-cyan-400 to-violet-800 bg-clip-text text-transparent/[.0]'>
                ABOUT 
            </div>

            {/* Actual Text Below*/}

            <div className=''>

                <div className='font-quicksand'>
                    Hello! I am a 4th year student at the University of Waterloo, studying Mathematics with a 
                    Double Major in Computational Mathematics, Statistics, Minor in Optimization. 
                </div>

                <div className='font-quicksand pt-5'>
                    I am passionate about data science, machine learning and full-stack development. I have a plethora of work experiences, projects, accomplishments 
                    and leadership positions in my community, demonstrating my passion and curiosity in the field.
                </div>

                <div className='font-quicksand pt-5 font-semibold'>
                    I am currently looking for Summer 2024 internships.
                </div>

                <div className='pt-5 flex'>


                    <Link href='https://drive.google.com/file/d/1buZOdPyuYMJJJ6hrV9-d6K6mFSIGDyox/view?usp=sharing'>                    
                    
                        <div className='bg-gradient-to-r from-teal-200 to-cyan-400 px-5 mx-3 text-white'>
                            Resume
                        </div>

                    </Link>


                    <Link href='mailto: @02.mbilalkhan@gmail.com'>

                        <div className='bg-gradient-to-r from-cyan-400 to-indigo-300 px-5 mx-3 text-white'>
                            Get In Touch
                        </div>

                    </Link>
                    
                </div>

                

            </div>


        </div>
    )
}

export default AboutCard

