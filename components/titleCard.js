import React from 'react'
import Link from 'next/link'
import { RxLinkedinLogo, RxGithubLogo } from 'react-icons/rx'

const TitleCard = () => {
    return(

        <div className='text-black text-[100px]'>
                
            <div className='font-quicksand font-semibold bg-gradient-to-r  from-teal-200 via-cyan-400 to-violet-800 bg-clip-text text-transparent/[.0]'>
                Bilal Khan
            </div>

            <div className='px-2 text-lg font-quicksand'>
                Software Engineer | Mathematics @ UWaterloo
            </div>

            <div className='flex pt-20 pb-5'>

                <Link className='px-2' href='https://www.linkedin.com/in/bilal-khan1548/'>

                    <div className='text-sm rounded-xl px-5 bg-sky-300 text-white'>
                        LinkedIn
                    </div>

                </Link>

                <Link className='px-2' href='https://github.com/m-bilu'>

                    <div className='text-sm rounded-xl px-5 bg-sky-300 text-white'>
                        Github
                    </div>

                </Link>

                <div className='mx-2 text-sm rounded-xl px-5 bg-sky-300 text-white'>
                    02.mbilalkhan@gmail.com
                </div>

                

                

            </div>

            <div className='flex'>
                <div className='text-sm rounded-xl px-5 mx-5 bg-sky-300 text-white'>
                        +1 647-989-6112
                    </div>

                    <div className='text-sm rounded-xl px-5 bg-sky-300 text-white'>
                        Canadian Citizen
                    </div>
            </div>
            


        </div>
    )
}

export default TitleCard

