import Header from '../components/Header'
import Sidebar from '../components/Sidebar'
import Videos from '../components/Video'

export default function Event () {
  return (
    <>
      <Header />
      <main className='flex flex-1'>
        <Videos />
        <Sidebar />
      </main>
    </>
  )
}
