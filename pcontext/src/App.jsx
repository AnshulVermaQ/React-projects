
import './App.css'
import Login from './components/Login'
import Profile from './components/Profile'
import UsercontextProvider from './context/UsercontextProvider'

function App() {
  return(
    <UsercontextProvider>
      <h1>React is very good</h1>
      <Login/>
      <Profile/>
    </UsercontextProvider>
  )
}

export default App
