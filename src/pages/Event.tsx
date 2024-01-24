import { useParams } from 'react-router-dom'
import Header from '../components/Header'
import Sidebar from '../components/Sidebar'
import Video from '../components/Video'

export default function Event () {
  const { slug } = useParams<{ slug: string }>()
  return (
    <>
      <Header />
      <main className='flex flex-1'>
        {slug ? <Video lessonSlug={slug} /> : <div className='flex-1'></div>}
        <Sidebar />
      </main>
    </>
  )
}
