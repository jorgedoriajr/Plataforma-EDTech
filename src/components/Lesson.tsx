import { CheckCircle, Lock } from 'phosphor-react'
import { isPast, format } from 'date-fns'
import { ptBR } from 'date-fns/locale'
import { Link, useParams } from 'react-router-dom'
import classNames from 'classnames'

interface LessonProps {
  title: string
  slug: string
  availableAt: Date
  type: 'live' | 'class'
}

export default function Lesson ({
  title,
  slug,
  availableAt,
  type
}: LessonProps) {
  let isLessonAvailable = isPast(availableAt)
  let availableDateFormatted = format(
    availableAt,
    "EEEE' - 'd' de 'MMMM' - 'k'h'mm",
    { locale: ptBR }
  )

  const pageSlug = useParams<{ slug: string }>()
  const isActivedLesson = slug === pageSlug.slug

  return (
    <Link to={`/event/lesson/${slug}`} className='flex flex-col gap-2 group'>
      <span className='text-gray-300 group-hover:text-white transition-colors'>
        {' '}
        {availableDateFormatted}{' '}
      </span>

      <div
        className={classNames(
          'relative flex flex-col gap-4 border rounded p-4 mt-2 border-gray-500 group-hover:border-green-500 transition-colors',
          { 'bg-green-500': isActivedLesson }
        )}
      >
        <div
          className={classNames('', {
            'absolute w-[13px] h-[13px] top-[24%] rounded-[2px] left-[-6.5px] bg-green-500 rotate-45':
              isActivedLesson,
            'hidden invisible': !isActivedLesson
          })}
        ></div>

        <header className='flex items-center justify-between'>
          {isLessonAvailable ? (
            <span
              className={classNames('flex gap-2 items-center text-blue-500', {
                'text-blue-500': !isActivedLesson,
                'text-white': isActivedLesson
              })}
            >
              <CheckCircle size={20} />
              Conteúdo liberado
            </span>
          ) : (
            <span className='flex gap-2 items-center text-orange-500'>
              <Lock size={20} />
              Em breve
            </span>
          )}

          <span
            className={classNames(
              'border text-white rounded px-2 py-[2px] text-xs',
              {
                'border-white': isActivedLesson,
                'border-green-500': !isActivedLesson
              }
            )}
          >
            {type == 'live' ? 'AO VIVO' : 'AULA PRÁTICA'}
          </span>
        </header>

        <strong className='mt-5 block'>{title}</strong>
      </div>
    </Link>
  )
}
