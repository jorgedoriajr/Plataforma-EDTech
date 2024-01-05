import { gql, useQuery } from '@apollo/client'

function App (): JSX.Element {
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
    <ul>
      {data?.lessons.map(lesson => {
        return <li key={lesson.id}>{lesson.title}</li>
      })}
    </ul>
  )
}

export default App
