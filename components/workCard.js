import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

// Image imports
import cuidado from '@/public/cuidado_logo.jpg'
import vosyn from '@/public/vosyn_logo.jpg'
import waterloo from '@/public/waterloo_logo.png'
import dsc from '@/public/dsc_logo.jpg'
import ey from '@/public/ey_logo.png'
import psa from '@/public/psa_logo.jpg'


const WorkCard = () => {
    return(
        
        <div className='flex'>
                
            <div className='px-5 font-quicksand font-bold bg-gradient-to-r from-teal-600 via-cyan-400 to-violet-800 bg-clip-text text-transparent/[.0]'>
                WORK & EXPERIENCES
            </div>

            {/* Actual Text Below*/}


                <div className=''>


                    <Link href='https://www.linkedin.com/company/vosyn/about/'>                    
                    
                        <div className='flex justify-between'>
                            <div>
                                <div className='workTitleStyle text-3xl'>
                                    Vosyn
                                </div>
                                <div className='workTitleStyle'>
                                    | Machine Learning Engineer Intern
                                </div>
                                <div className='workTitleStyle'>
                                    | 06 2023 -- 10 2023
                                </div>
                                <div className='workTitleStyle'>
                                    | Etobicoke, ON
                                </div>
                                <div className='workTitleStyle'>
                                    | Python, Tensorflow, Keras, Pytorch, GCP
                                </div>
                            </div>

                            <div>

                                {/* LOGO in flex */}
                                <div className='relative p-10'>
                                    <Image
                                        src={vosyn}
                                        layout='fill'
                                        objectFit='cover'
                                        className='rounded-3xl'/>
                                </div>

                            </div>

                        </div>

                    </Link>

                    <div className='font-quicksand pt-10 pb-3'>
                    Communicated with stakeholders and designed a transformer-based minimum viable product, connecting with various phoneme2grapheme-based STT/TTS models for generalized NLP tasks. Using Jira scrum, Confluence for code review & documentation. Cross-functional collaboration to develop deep learning architecture and API/front-end integration.
                    </div>
                    <div className='font-quicksand py-3'>
                    CI/CD and Docker to apply cloud native infrastructure and create zero-shot, cross-lingual voice synthesis models using LSTMs and GANs, based off of open source Huggingface models; VALLEX, Meta VoiceBox, Coqui-TTS.                    
                    </div>
                    <div className='font-quicksand pt-3 pb-10'>
                    Literature review on various large language concepts like transfer learning, fine-tuning and on open-source TTS frameworks like Tacotron2/WaveNet to develop proprietary TTS system. Built data warehouse w/ ETL, PySpark.                    
                    </div>


                    {/*/// ============================================================================================================== ////*/}


                    <Link href='https://uwaterloo.ca/scholar/znegeri/home'>

                        <div className='flex justify-between pt-10'>
                            <div className=''>
                                <div className='workTitleStyle text-3xl'>
                                Department of Statistics, University of Waterloo
                                </div>
                                <div className='workTitleStyle'>
                                | NSERC Undergraduate Research Assistant
                                </div>
                                <div className='workTitleStyle'>
                                | 06 2023 -- Ongoing
                                </div>
                                <div className='workTitleStyle'>
                                | Waterloo, ON
                                </div>
                                <div className='workTitleStyle'>
                                | R, lots of Statistics
                                </div>
                            </div>

                            <div>

                                {/* LOGO in flex */}
                                <div className='relative p-10 align-right'>
                                    <Image
                                        src={waterloo}
                                        layout='fill'
                                        objectFit='cover'
                                        className='rounded-3xl'/>
                                </div>

                            </div>

                        </div>

                    </Link>

                    <div className='font-quicksand pt-10 pb-3'>
                    Assisting professor Zelalem Negeri to research applied computational algorithms for likelihood estimation, inference and prediction in meta-data-analysis of ADMA diagnostic tests in healthcare (COVID-19 test sensitivity, specificity). 
                    </div>
                    <div className='font-quicksand py-3 pb-10'>
                    Funded by NSERC's USRA award grant of $10,000. Involves complex statistical modelling and experimental design adhering to GLM, Regression, and Decision Tree literature in R and Python, along with performance metrics evaluations.
                    </div>


                    {/*/// ============================================================================================================== ////*/}

                    
                    <Link href='https://uwdatascience.ca/'>


                        <div className='flex justify-between pt-10'>
                            <div className=''>
                                <div className='workTitleStyle text-3xl'>
                                UW Data Science Club
                                </div>
                                <div className='workTitleStyle'>
                                | Full Stack Developer
                                </div>
                                <div className='workTitleStyle'>
                                |  11 2022 -- 07 2023 
                                </div>
                                <div className='workTitleStyle'>
                                | Waterloo, ON
                                </div>
                                <div className='workTitleStyle'>
                                | Next.JS, Firebase, Firestore, Tailwind CSS, Heroku
                                </div>
                            </div>

                            <div>

                                {/* LOGO in flex */}
                                <div className='relative p-10 align-right'>
                                    <Image
                                        src={dsc}
                                        layout='fill'
                                        objectFit='cover'
                                        className='rounded-3xl'/>
                                </div>

                            </div>

                        </div>

                    </Link>

                    <div className='font-quicksand pt-10 pb-3'>
                    Held lead role in dev team to develop and debug a full-stack solution for the club website, allowing for new online ways to connect with our community. Visualization dashboard for data-driven site analytics using TypeScript, React, Next.JS.                    </div>
                    <div className='font-quicksand py-3 pb-10'>
                    Developed server bots using Python and Flask. Utilized Google Calendar REST API, SQL with PostGreSQL database for club event-reminder functionality, deployed using Heroku. Unit/Integration testing through bash scripting.                    </div>


                    {/*/// ============================================================================================================== ////*/}


                    <Link href='https://github.com/m-bilu/cuidado-platform'>


                        <div className='flex justify-between pt-10'>
                            <div className=''>
                                <div className='workTitleStyle text-3xl'>
                                Cuidado Property Management
                                </div>
                                <div className='workTitleStyle'>
                                | Full Stack Developer
                                </div>
                                <div className='workTitleStyle'>
                                | 06 2022 -- 12 2022 
                                </div>
                                <div className='workTitleStyle'>
                                | Waterloo, ON
                                </div>
                                <div className='workTitleStyle'>
                                | Angular 14, PostgreSQL, Bootstrap CSS, FastAPI
                                </div>
                            </div>

                            <div>

                                {/* LOGO in flex */}
                                <div className='relative p-10 align-right'>
                                    <Image 
                                        src={cuidado}
                                        layout='fill'
                                        objectFit='cover'
                                        className='rounded-3xl'
                                        />
                                </div>

                            </div>

                        </div>
                        

                    </Link>

                    <div className='font-quicksand py-10'>
                    Full stack web development, provided scalable deployment of Javascript Angular 14 front-end platform for a B2C real estate management platform. Python Django/MongoDB backend, automated HTTP request testing w/ Postman.                    
                    </div>                    
                    

                    {/*/// ============================================================================================================== ////*/}
    

                    <Link href='https://github.com/m-bilu/certs'>


                        <div className='flex justify-between pt-10'>
                            <div className=''>
                                <div className='workTitleStyle text-3xl'>
                                EY Dubai
                                </div>
                                <div className='workTitleStyle'>
                                | Business Consultant Intern
                                </div>
                                <div className='workTitleStyle'>
                                | 05 2022 -- 08 2022 
                                </div>
                                <div className='workTitleStyle'>
                                | Dubai, UAE
                                </div>
                                <div className='workTitleStyle'>
                                | MS Office, Power BI, Pandas, Numpy, Tableau
                                </div>
                            </div>

                            <div>

                                {/* LOGO in flex */}
                                <div className='relative p-10 align-right'>
                                    <Image 
                                        src={ey}
                                        layout='fill'
                                        objectFit='cover'
                                        className='rounded-3xl'
                                        />
                                </div>

                            </div>

                        </div>
                        

                    </Link>

                    <div className='font-quicksand py-10'> {/* EXPAND THIS PLEASE, TOO SHORT*/}
                    Worked in team ofleading public sector consultants to innovate public policy around early child development and surveillance. Provided various data insights into various private/public sector projects to help make executive consulting decisions.
                    </div>


                    {/*/// ============================================================================================================== ////*/}
    

                    <Link href=''>


                        <div className='flex justify-between pt-10'>
                            <div className=''>
                                <div className='workTitleStyle text-3xl'>
                                Faculty of Mathematics, University of Waterloo
                                </div>
                                <div className='workTitleStyle'>
                                | Teacher's Assistant for Math 135 
                                </div>
                                <div className='workTitleStyle'>
                                | 08 2021 -- 12 2021
                                </div>
                                <div className='workTitleStyle'>
                                | Waterloo, ON
                                </div>
                                <div className='workTitleStyle'>
                                | MS Office, Lots of Mathematics
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

                    <div className='font-quicksand py-10'> {/* EXPAND THIS PLEASE, TOO SHORT*/}
                        Displayed an innate understanding of communication of complex mathematical problem-solving through tutoring 1st, 2nd year UW Math students. Contributed in improving student averages by %10 throughout the semester.                    
                    </div>
                    

                    {/*///////////////////////////////////////////////////////////////*/}



                    <Link href='https://www.linkedin.com/company/vosyn/about/'>                    
                    
                        <div className='flex justify-between'>
                            <div>
                                <div className='workTitleStyle text-3xl'>
                                    UW Pakistan Student Association
                                </div>
                                <div className='workTitleStyle'>
                                    | Co-President
                                </div>
                                <div className='workTitleStyle'>
                                    | 04 2023 -- 09 2023
                                </div>
                                <div className='workTitleStyle'>
                                    | Waterloo, ON
                                </div>
                            </div>

                            <div>

                                {/* LOGO in flex */}
                                <div className='relative p-10'>
                                    <Image
                                        src={psa}
                                        layout='fill'
                                        objectFit='cover'
                                        className='rounded-3xl'/>
                                </div>

                            </div>

                        </div>

                    </Link>

                    <div className='font-quicksand pt-10 pb-3'>
                        
                        As the Co-President of the UWaterloo Pakistani Student Association, I drive the planning and execution of weekly events centered around celebrating Pakistani culture. I have learned how to communicate efficiently with a team, confident in my ability to work independently while maintaining effective communication. During my term, we have risen the club budget by 30%, allowing for future club execs to fund larger, more ambitious events. I innovated new directions for our club; initiating the development for our first full-stack website solution, initiating networking events to connect our students with Pakistani professionals in various fields, and starting our first discord server to bolster our online community and presence.

                    </div>
                    
                    
                    








                    

                </div>

                

        


        </div>
    
    )
}

export default WorkCard

