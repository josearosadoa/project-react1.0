import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import users from './components/users.json'
import colores from './components/colores.json'
import { createPortal } from 'react-dom'



function App() {
  const randomIndex = Math.floor(Math.random() * users.length) //recargar la imagen con una imagen randon
  const [index, setIndex] = useState(randomIndex)
  const changedUsers = () => {
    const randomIndex = Math.floor(Math.random() * users.length) //Generar un numero randon en la imagen
    setIndex(randomIndex)

    const colors = ["#f0ffff", "#ffe4c4", "#ffebcd", "#a52a2a", "#5f9ea0","#d2691e","#ff7f50"] //colores 
    const randomColor =  Math.floor(Math.random() * colors.length)  //color ramdon 
    document.body.style = `background: ${colors[randomColor]}` //cambiar el background 
  }
  return (
    <div className="App" style={{color: colors[randomColor]}} >
      <div className='card'>      
        <h1>{users[index].name.title} {users[index].name.first} {users[index].name.last}</h1>
        <img src={users[index].picture.large}alt="" />
        <ul>
          <li><i class="fa-solid fa-envelope"></i> {users[index].email}</li>
          <li><i class="fa-solid fa-phone"></i> {users[index].phone}</li>
          <li><i class="fa-solid fa-location-dot"></i> {users[index].location.country} {users[index].location.city} {users[index].location.state}</li>
        </ul>
        <button className='boton' onClick={changedUsers}>Change User</button>
        </div>
    
    </div>
  )
}

export default App
