import { gql, useQuery } from '@apollo/client'
import Header from '../components/Header'
import Sidebar from '../components/Sidebar'

export default function Event () {
  const GET_LESSONS_QUERY = gql`
    query {
      lessons {
        id
        title
      }
    }
  `
  interface Lesson {
    id: string
    title: string
  }

  const { data } = useQuery<{ lessons: Lesson[] }>(GET_LESSONS_QUERY)

  return (
    <div className='flex flex-col min-h-screen'>
      <Header />
      <main className='flex flex-1'>
        <div className='flex-1'>Video</div>
        <Sidebar />
      </main>
    </div>
  )
}
