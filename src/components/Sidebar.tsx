import Lesson from './Lesson'
import { useGetLessonsQuery } from '../graphql/generated'
export default function Sidebar () {
  const { data } = useGetLessonsQuery()

  return (
    <aside className='w-[348px] bg-gray-700 p-6 border-l border-gray-600 flex flex-col'>
      <span className='font-bold text-2xl pb-6 mb-6 border-gray-50 block border-b border-b-gray-300'>
        Cronograma de aulas
      </span>

      <div className='flex flex-col gap-8'>
        {data?.lessons.map(lesson => {
          return (
            <Lesson
              key={lesson.id}
              title={lesson.title}
              slug={lesson.slug!}
              availableAt={new Date()}
              type={lesson.lessonType}
            />
          )
        })}
      </div>
    </aside>
  )
}
