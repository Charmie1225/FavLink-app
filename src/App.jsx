import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Table from'./components/Table'
import Form from './components/Form'


// create an APP component to render as our main component





function App() {

  const [favLinks, setFavLinks] = useState([])

let handleNewSubmission =(data) => {

  setFavLinks([...favLinks, data])

}
  // all components have to return som JSX
  return(
    <div>
      <h1 className = "testClass"> Submit your fav Links</h1>
      <Form onNewSubmit = {handleNewSubmission}/>


      <Table links = {favLinks}/>
    </div>
  )
}
export default App
  