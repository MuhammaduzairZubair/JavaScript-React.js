import './App.css';
import Main from './components/Main';
import Home from './pages/Home';
import About from './pages/About';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Features from './pages/Features';
import Contact from './pages/Contact';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Desc from './components/Desc';
import { useState } from 'react';



function App() {
  const [todo,setTodo] = useState([])
  const [title,setTitle] =useState()
  const [description,setDescription] = useState()

  
  
  const handleTitle =(e) =>{
      setTitle(e.target.value)
  }

  const handleDescription =(e) =>{
      setDescription(e.target.value)
  }

  const handleSubmit = (e) =>{
      e.preventDefault();
  }

  const handleSave = () => {
      const newItem = {
          title:title,
          description:description
      }
      setTodo([...todo,newItem])
  }
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar todoCount={todo.length}/>
      <Routes>
        <Route path = "/" element={<Main handleSubmit={handleSubmit}
        handleSave={handleSave}
        todo={todo}
        handleDescription={handleDescription}
        handleTitle={handleTitle}

        />}/>
        <Route path = "/" element={<Home/>}/>
        <Route path = "/about" element={<About/>}/>
        <Route path = "/features" element={<Features/>}/>
        <Route path = "/contact" element={<Contact/>}/>
        <Route path ="/description/:title" element={<Desc/>}/>
        
      </Routes>
      <Footer/>
      </BrowserRouter>


    </div>
  );
}

export default App;
