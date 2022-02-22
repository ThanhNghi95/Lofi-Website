import {BrowserRouter as Router, Route , Routes} from 'react-router-dom'

import './App.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import About from './components/About/About';
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route 
            path='/' 
            element={ <>
                        <Header/>
                        <Home/>
                      </>
            }
          />
          <Route path='/login' element={<Login/>}/>
          <Route path='/about' element={<About/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
