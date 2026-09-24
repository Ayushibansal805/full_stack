// import { useState } from 'react'
// import { useEffect } from 'react'
// import heroImg from './assets/hero.png'
// import reactLogo from './assets/react.svg'
// import viteLogo from './assets/vite.svg'
// import './App.css'
// // import Counter from './components/Counter'
// // import UserData from './components/UserData'
// // import UserDataa from './components/UserDataa'
// // import UserContext from './components/UserContext'
// // provider 
// function App() {

//   // const user = {
//   //   name: "Ayushi",
//   //   age: 10
//   // }

//   // const [user, setUser] = useState({
//   //   name: "Ayushi",
//   //   age: 20
//   // });

//   // return (
//   //   <UserContext.Provider value={{user, setUser}}>
//   //     <UserDataa />
//   //   </UserContext.Provider>
//   // )

//   // return (
//   //   <UserContext.Provider value={user}>
//   //     <UserDataa />
//           // <Counter />
//   //   </UserContext.Provider>
//   // )

// //     return (
// //     // <>
// //     //   {/* <Counter />
// //     //   <UserData /> */}
// //     //   <h1>React</h1>
// //     // </>)

// //   const [user, setUser] = useState([])        // [] is initial value of user state, it is an empty array. setUser is a function that updates the user state.
// //   const [loading, setLoading] = useState(true)  // true is initial value of loading state, it means the data is being fetched. setLoading is a function that updates the loading state. initially loading hogihi hogi
// //   const [error, setError] = useState("")  // "" is initial value of error state, it means there is no error. setError is a function that updates the error state. intitially error empty hoga



// //   useEffect(() => {

// //     console.log("useEffect initiated");

// //     async function getUsers() {
// //       try {
// //         const response = await fetch("https://jsonplaceholder.typicode.com/usrs"); 
 
// //         // if (response.status !== 200) { 
// //         //   throw new Error("Something went wrong"); 
// //         // } 
// //         const data = await response.json(); 
// //         setUser(data);  
// //       // setUser is a function that updates the user state with the data fetched from the API. 
// //       } 
 
// //       catch(error) { 
// //         setError(error.message); 
 
// //       } finally { 
// //         setLoading(false);  // setLoading is a function that updates the loading state to false, it means the data has been fetched. 
// //       } 
 
// //     } 
 
// //     getUsers(); 
 
// //   }, [])    // [] is dependency array, it means useEffect will run only once when the component mounts. If you want to run it again when a specific variable changes, you can add that variable to the array. 
 
// //   // console.log(user); 
 
// //   if (loading) { 
// //     return <h1>Loading...</h1> 
// //   } 
 
// //   if (error) { 
// //     return <h1>Error: {error}</h1> 
// //   } 
 
// //   return ( 
// //     <div> 
// //       {user.map((u) => 
// //       (<div key={u.id}> 
// //         <h1>Name: {u.name}</h1> 
// //         <p> Email: {u.email}</p> 
// //       </div>)) 
// // } 
// //     </div> 
// //   ) 
 
 
//     const [name, setName] = useState("")  // "" is initial value of name state, it means the input field is empty. setName is a function that updates the name state.; 

//     function handleSubmit(e) {
//       e.preventDefault();  // preventDefault is a method that prevents the default behavior of the form submission, which is to reload the page.
//       console.log(name);
//     }
//     return ( 
//       <form onSubmit={handleSubmit}>                

//         <input type="text" 
//         placeholder='Enter your name' 
//         value={name}
//         onChange={(e) => {
//           setName(e.target.value)
//         }}/>

//         <h1>Hello {name}</h1>

//         <button type="submit">Submit</button>

//       </form> 
//     ) 
 
// } 
 
 
 
 
// export default App 
 
// // key is a unqiue identifier for each element in the list, it helps React to identify which items have changed, are added, or are removed.



// React Router DOM
// import './App.css'
// import { Link, Routes, Route } from 'react-router-dom'

// function Home() {
//   return <h1> This is the HomePage </h1>
// }

// function About() {
//   return <h1> This is the AboutPage </h1>
// }

// function Contact() {
//   return <h1> This is the ContactPage </h1>
// }

// function App() {

//   return (

//     <>

//     <nav>
//       <Link to='/'>Home</Link>
//       <Link to='/about'>About us</Link>
//       <Link to='/contact'>Contact us</Link>
//     </nav>

//     <Routes>
//       <Route path="/" element={<Home />} />   
//       <Route path="/about" element={<About />} />
//       <Route path="/contact" element={<Contact />} />
//     </Routes>

//     </>

//   )

// }
// export default App

// import './App.css'
// import { Link, Routes, Route } from 'react-router-dom'
// import ProductDetails from './components/ProductDetails'

// function App() {

//   return (

//     <>
//     <nav>
//       <Link to='/'>Home</Link>
//       </ nav>
//       <Routes>
//         <Route path="/" element={<h1> This is the HomePage </h1>} />   
//         <Route path="/productDetails/:id" element={<ProductDetails />} />
        
//       </Routes>
    
//     </>
//   )

// }

// export default App

import './App.css'


function App() {
  
}
export default App