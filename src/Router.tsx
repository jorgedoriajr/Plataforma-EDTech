import { Route, Routes } from 'react-router-dom'
import Event from './pages/Event'
import Subscribe from './pages/Subscribe'

export default function Router () {
  return (
    <Routes>
      <Route path='/event' element={<Event />} />
      <Route path='/event/lesson/:slug' element={<Event />} />
      <Route path='/' element={<Subscribe />} />
    </Routes>
  )
}
