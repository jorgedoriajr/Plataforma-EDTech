import { Player, Youtube, DefaultUi } from '@vime/react'
import '@vime/core/themes/default.css'
import {
  CaretRight,
  DiscordLogo,
  FileArrowDown,
  Lightning
} from 'phosphor-react'
import {
  GetLessonBySlugQuery,
  useGetLessonBySlugQuery
} from '../graphql/generated'
import { useState } from 'react'

interface VideoProps {
  lessonSlug: string
}
type PageContentType = GetLessonBySlugQuery | undefined

export default function Videos ({ lessonSlug }: VideoProps) {
  const [pageContent, setPageContent] = useState<PageContentType>(undefined)

  // getLessonsService ******************************************************
  let { data } = useGetLessonBySlugQuery({ variables: { slug: lessonSlug } })
  if (!data)
    return (
      <p className='flex-1 align-middle text-center mt-auto'>Carregando...</p>
    )
  else setPageContent(data)
  // getLessonsService ******************************************************

  let lesson = pageContent!.lesson!
  let lessonTeacher = lesson!.teacher!

  return (
    <section className='flex-1'>
      <div className='bg-black flex justify-center'>
        <span className='h-full w-full max-w-[1100px] max-h-[60vh] aspect-video'>
          <Player>
            <Youtube videoId={lesson.videoId} />
            <DefaultUi />
          </Player>
        </span>
      </div>

      <div className='p-8 max-w-[1100px] mx-auto'>
        <article className='flex items-start gap-16'>
          <span className='flex-1'>
            <h1 className='text-2xl font-bold'>{lesson.title}</h1>
            <p className='mt-4 text-gray-200 leading-relaxed'>
              {lesson.description}
            </p>

            <div className='flex items-center gap-4 mt-6'>
              <img
                className='h-16 rounded-full border-2 border-blue-500'
                src={lessonTeacher.avatarURL}
                alt='avatar_icon'
              />

              <span className='flex flex-col gap-4 leading-relaxed'>
                <strong className='font-bold text-2xl block'>
                  {lessonTeacher.name}
                </strong>
                <p className='text-gray-200 text-sm'>{lessonTeacher.bio}</p>
              </span>
            </div>
          </span>

          <span className='flex flex-col gap-4'>
            <a
              href='#'
              className='p-4 text-sm bg-green-500 flex items-center rounded font-bold uppercase gap-2 justify-center hover:bg-green-700 transition-colors'
            >
              <DiscordLogo size={24} />
              Comunidade do discord
            </a>
            <a
              href='#'
              className='p-4 text-sm border border-blue-500 flex items-center rounded font-bold uppercase gap-2 justify-center hover:bg-blue-600 hover:text-gray-900 transition-colors'
            >
              <Lightning size={24} />
              Acesse o desafio
            </a>
          </span>
        </article>

        <article className='gap-8 mt-20 grid grid-cols-2'>
          <a
            href='#'
            className='bg-gray-700 overflow-hidden rounded flex items-stretch gap-6 hover:bg-gray-500 transition-colors'
          >
            <div className='bg-green-700 h-full p-6 flex items-center'>
              <FileArrowDown size={40} />
            </div>

            <div className='py-6 leading-relaxed'>
              <strong className='text-sm text-gray-200 mt-2'>
                material complementar
              </strong>
              <p className='text-sm text-gray-200 mt-2'>
                Acesse o material complementar para acelerar o seu
                desenvolvimento
              </p>
            </div>

            <div className='h-full p-6 flex items-center'>
              <CaretRight size={24} />
            </div>
          </a>

          <a
            href='#'
            className='bg-gray-700 overflow-hidden rounded flex items-stretch gap-6 hover:bg-gray-500 transition-colors'
          >
            <div className='bg-green-700 h-full p-6 flex items-center'>
              <FileArrowDown size={40} />
            </div>

            <div className='py-6 leading-relaxed'>
              <strong className='text-sm text-gray-200 mt-2'>
                Wallpapers exclusivos
              </strong>
              <p className='text-sm text-gray-200 mt-2'>
                Baixe wallpapers exclusivos do Ignite Lab e personalize a sua
                máquina
              </p>
            </div>

            <div className='h-full p-6 flex items-center'>
              <CaretRight size={24} />
            </div>
          </a>
        </article>
      </div>
    </section>
  )
}
