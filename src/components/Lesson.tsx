import { CheckCircle, Lock } from 'phosphor-react'
import { isPast, format } from 'date-fns'
import { ptBR } from 'date-fns/locale'

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

  return (
    <a href='#' className='flex flex-col gap-2'>
      <span className='text-gray-300'> {availableDateFormatted} </span>

      <div className='flex flex-col gap-4 border rounded p-4 mt-2 border-gray-500'>
        <header className='flex items-center justify-between'>
          {isLessonAvailable ? (
            <span className='flex gap-2 items-center text-blue-500'>
              <CheckCircle size={20} />
              Conteúdo liberado
            </span>
          ) : (
            <span className='flex gap-2 items-center text-orange-500'>
              <Lock size={20} />
              Em breve
            </span>
          )}

          <span className='border border-green-500 text-white rounded px-2 py-[2px] text-xs'>
            {type == 'live' ? 'AO VIVO' : 'AULA PRÁTICA'}
          </span>
        </header>

        <strong className='mt-5 block'>{title}</strong>
      </div>
    </a>
  )
}
