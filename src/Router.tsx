import { Route, Routes } from 'react-router-dom'
import Event from './pages/Event'

export default function Router () {
  return (
    <Routes>
      <Route path='/' element={<Event />} />
    </Routes>
  )
}
