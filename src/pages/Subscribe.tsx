import LogoSvg from '../components/Logo'
import { FormEvent, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useCreateSubscriberMutation } from '../graphql/generated'

export default function Subscribe () {
  const [name, setName] = useState<string>('')
  const [email, setEmail] = useState<string>('')
  const [submitError, setSubmitError] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')
  const navigate = useNavigate()

  const [createSubscriber, { loading }] = useCreateSubscriberMutation({
    variables: { email, name }
  })

  function handleSubscribe (event: FormEvent) {
    event.preventDefault()
    setSubmitError(false)
    setErrorMessage('')
    let isDataEmpty: boolean = name.length == 0 || email.length == 0

    if (isDataEmpty) {
      setSubmitError(true)
      setErrorMessage('Verifique os campos e tente novamente')

      return
    }

    // if(subscriberAlreadyExists) {
    //     return // todo exception
    // }

    // todo: call create service
    createSubscriber({
      variables: {
        name: name,
        email: email
      }
    })
      .then(() => {
        setSubmitError(false)
        setErrorMessage('')
        navigate('/event')
      })
      .catch(e => {
        setSubmitError(true)
        setErrorMessage(e.message)
      })
  }

  return (
    <main className='min-h-screen bg-blur bg-cover bg-no-repeat flex flex-col items-center'>
      <section className='flex justify-between w-full max-w-[1100px] mt-20 mx-auto'>
        <div className='max-w-[640px]'>
          <LogoSvg />
          <h1 className='mt-8 text-[2.5rem] leading-tight'>
            Construa uma{' '}
            <strong className='text-blue-500'>aplicação completa</strong>, do
            zero, com <strong className='text-blue-500'>React</strong>
          </h1>
          <p className='mt-4 text-gray-200 leading-relaxed'>
            Em apenas uma semana você vai dominar na prática uma das tecnologias
            mais utilizadas e com alta demanda para acessar as melhores
            oportunidades do mercado.
          </p>
        </div>

        <div className='p-8 bg-gray-700 border border-gray-500 rounded'>
          <strong className='text-2xl mb-6 block'>
            Inscreva-se gratuitamente
          </strong>

          <form
            className='flex flex-col gap-2 w-full min-h-[240px]'
            onSubmit={e => handleSubscribe(e)}
          >
            <input
              className='bg-gray-900 rounded px-5 h-14'
              type='text'
              name='name'
              placeholder='Digite seu nome'
              onChange={e => setName(e.target.value)}
            />
            <input
              className='bg-gray-900 rounded px-5 h-14'
              type='email'
              name='email'
              placeholder='Digite seu e-mail'
              onChange={e => setEmail(e.target.value)}
            />

            <button
              type='submit'
              className='mt-4 bg-green-500 uppercase py-4 rounded font-bold text-sm hover:bg-green-700 transition-colors disabled:opacity-50'
              disabled={loading}
            >
              {loading ? 'Enviando...' : 'Garantir minha vaga'}
            </button>

            {submitError && (
              <span className='text-red-500 text-sm truncate text-ellipsis max-w-[90%]'>
                {errorMessage}
              </span>
            )}
          </form>
        </div>
      </section>

      <img
        src='/src/assets/code-mock.png'
        className='mt-10 shadow-2xl shadow-gray-100/30'
        alt='code-mockup'
      />
    </main>
  )
}
