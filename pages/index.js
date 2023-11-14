import { Manrope, Quicksand } from 'next/font/google'
import Picture from '@/components/picture'


const inter = Quicksand({ subsets: ['latin'] })

export default function Home() {
  return (


    <div className='h-full'>
      <Picture />
    </div>
  )
}
