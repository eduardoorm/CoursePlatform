import logo from './logo.svg';
import './App.css';
import NavBar from './components/Navbar'
import Footer from './components/Footer'
import {BrowserRouter as Router, Switch,Route} from 'react-router-dom';
import Home from './components/pages/Home'
import Login from './components/pages/Login';
import Register from './components/pages/Register';
import Collections from './components/pages/Collections'
import Course from './components/pages/Courses'
import Checkout from './components/pages/Checkout'
import Video from './components/pages/Video'
import PublicarCurso from './components/pages/Publicar'
import Perfil from './components/pages/Perfil'

function App() {
  return (
   <>
   <Router>    
        <Switch>
             <Route path='/' exact ><NavBar/><Home/> <Footer/></Route>
             <Route path='/login' exact ><NavBar/><Login/> <Footer/></Route>
             <Route path='/register' exact ><NavBar/><Register/> <Footer/></Route>
              <Route path='/collections' exact ><NavBar/><Collections/> <Footer/></Route>
              <Route path='/course' exact ><NavBar/><Course/> <Footer/></Route>
              <Route path='/video' exact ><Video/></Route>
              <Route path='/publicar' exact ><NavBar/><PublicarCurso/></Route>
              <Route path='/perfil' exact ><NavBar/><Perfil/> <Footer/></Route>
              <Route path='/checkout' exact ><NavBar/><Checkout/> </Route>     
          </Switch>
   </Router>
   </>
  );
}

export default App;
