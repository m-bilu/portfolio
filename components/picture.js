import React from 'react'
import Image from 'next/image'
import profilePic from '@/public/new_photo.jpg'
import TitleCard from './titleCard'
import AboutCard from './aboutCard'
import WorkCard from './workCard'
import ProjectCard from './projectCard'
import AwardsCard from './awardsCard'




const Picture = () => {
    return(
        <div className='flex justify-between'>


            <div className='fixed right-0 w-2/5 bg-gray-200 '>
                
                <Image class="object-cover" src={profilePic}/>

            </div>

            


            <div className='left-0 w-3/5 h-full px-20 bg-gradient-to-r from-white to-skyblue text-black flex justify-between'>

            {
                // Below div is so we can avoid w-full and have divs show beneath each other,
                // and to maintain w-full for background gradient
            }

                <div className=''> 

                    <div className='my-60 mx-10'>
                        <TitleCard />
                    </div>

                    <div className='my-60 mr-20'>
                        <AboutCard />
                    </div>

                    <div className='my-60 mr-20'>
                        <WorkCard />
                    </div>

                    <div className='my-60 mr-20'>
                        <ProjectCard />
                    </div>

                    <div className='my-60 mr-20'>
                        <AwardsCard />
                    </div>

                </div>

                

            </div>

            
            

            
            
        </div>
        
    )
}

export default Picture

