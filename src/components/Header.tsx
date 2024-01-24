import LogoSvg from './Logo'

export default function Header () {
  return (
    <header className='flex items-center justify-center py-5 w-screen bg-gray-700 border-b border-b-gray-800'>
      <LogoSvg />
    </header>
  )
}
