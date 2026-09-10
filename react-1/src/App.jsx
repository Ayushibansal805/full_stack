import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
// import Counter from './components/Counter'
// import UserData from './components/UserData'
import UserDataa from './components/UserDataa'
import UserContext from './components/UserContext'
// provider 
function App() {

  // const user = {
  //   name: "Ayushi",
  //   age: 10
  // }

  const [user, setUser] = useState({
    name: "Ayushi",
    age: 20
  });

  return (
    <UserContext.Provider value={{user, setUser}}>
      <UserDataa />
    </UserContext.Provider>
  )

  // return (
  //   <UserContext.Provider value={user}>
  //     <UserDataa />
  //   </UserContext.Provider>
  // )


//     return (
//     // <>
//     //   {/* <Counter />
//     //   <UserData /> */}
//     //   <h1>React</h1>
//     // </>)
}

export default App
