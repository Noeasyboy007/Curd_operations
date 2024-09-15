
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css'
import './App.css'
import CreateUser from './components/CreateUser'
import UpdateUsers from './components/UpdateUsers'
import Users from './components/Users'

function App() {

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Users />}></Route>
          <Route path='/create' element={<CreateUser />}></Route>
          <Route path='/update/:id' element={<UpdateUsers />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
