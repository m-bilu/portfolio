import React from 'react'
import Image from 'next/image'
import profilePic from '@/public/new_photo.jpg'
import TitleCard from './titleCard'
import AboutCard from './aboutCard'
import WorkCard from './workCard'

//              bg-gradient-to-r from-orange-500 to-orange-950 


const Picture = () => {
    return(
        <div className='flex justify-between'>

            <div className='fixed right-0'>
                
                <Image class="max-w-xl" src={profilePic}/>

            </div>


            <div className='left-0 w-2/3 h-full px-20 bg-gradient-to-r from-white to-skyblue text-black flex justify-between'>

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

                </div>

                

            </div>
            

            
            
        </div>
        
    )
}

export default Picture

