export default function Sidebar () {
  return (
    <aside className='w-[348px] bg-gray-700 p-6 border-l border-gray-600 flex flex-col'>
      <span className='font-bold text-2xl pb-6 mb-6 border-gray-50 block'>
        Cronograma de aulas
      </span>

      <div className='flex flex-col gap-8'>
        <article>Lesson</article>
        <article>Lesson</article>
        <article>Lesson</article>
        <article>Lesson</article>
        <article>Lesson</article>
        <article>Lesson</article>
      </div>
    </aside>
  )
}
