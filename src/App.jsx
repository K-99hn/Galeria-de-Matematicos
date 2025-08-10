import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Galeria from './components/Galeria'

function App() {
  return (
    <div className='bg-igit min-h-screen w-full fixed top-0 left-0 overflow-y-auto p-4'>
      <h1 className='text-6xl font-bold text-center text-black mb-8'>Galeria Matematicos</h1>
      <Galeria />
    </div>
  )
}

export default App
