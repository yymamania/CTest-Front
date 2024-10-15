import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import api from './config/env'
import { fetchGet } from './utils/fechGet'

function App() {
  const [laravel, setLaravel] = useState(null)
  const [codeigniter, setCodeigniter] = useState(null)

  useEffect(() => {
    fetchGet(api.laravel).then(data => {
      if (data) {
        setLaravel(data);
      }
    });
  }, [])

  useEffect(() => {
    fetchGet(api.codeigniter).then(data => {
      if (data) {
        setCodeigniter(data);
      }
    });
  }, [])

  return (
    <>
      <h2>Laravel</h2>
      {laravel && <p>{laravel.message}</p>}
      <hr/>
      <h2>Codeigniter</h2>
      {codeigniter && <p>{codeigniter.message}</p>}
    </>
  )
}

export default App
