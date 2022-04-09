import {BrowserRouter as Router, Route , Routes} from 'react-router-dom'
import './App.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home';

import About from './components/About/About';




function App() {
  
  const info ={
    name:localStorage.getItem('name'),
    email: localStorage.getItem('email'),
    photoURL: localStorage.getItem('photoURL')
}

  return (

  <Router>

    <Header info={info}/>
    <Routes>
      <Route 
        path='/' 
        element={ <>
                    <Home info={info}/>
                  </>
        }
      />
      <Route path='/about' element={<About/>}/>
    </Routes>
  </Router>
  );
}

export default App;
