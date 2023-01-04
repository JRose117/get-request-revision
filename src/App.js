import { useEffect } from 'react'
import axios from 'axios'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import AllDrinks from './components/AllDrinks'
import DrinkSingle from './components/DrinkSingle'
const App = () => {

  return (
    <div className="site-wrapper">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<AllDrinks />} />
          <Route path="/drink/:id" element={<DrinkSingle />} />

          {/* <Route path='/anime/:animeId' element={<OneAnime />}/> */}
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
