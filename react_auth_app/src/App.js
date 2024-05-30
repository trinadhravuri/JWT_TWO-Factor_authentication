import './App.css';
import {Login} from './components/Login';
import { Nav } from './components/Nav';
import { Register } from './components/Register';
import {BrowserRouter,Routes, Route} from 'react-router-dom';
import {Home} from './components/Home';

function App() {
  
  return <BrowserRouter>
          <Nav/>
            <Routes>
                <Route path='/register' element={<Register/>}/>
                <Route path='/login' element={<Login/>}/>
                <Route path='/home' element={<Home/>}/>
            </Routes>
          </BrowserRouter>;
};

export default App;
