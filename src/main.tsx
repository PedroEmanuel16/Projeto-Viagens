import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter, Routes, Route, Router } from "react-router";
import { CreateTrip } from './pages/create-trip';
import { TripDetails } from './pages/trip-details';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<CreateTrip />}/>
        <Route path='/trips/:tripId' element={<TripDetails />}/>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
