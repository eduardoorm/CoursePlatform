import NavBar from './components/Navbar'
import Footer from './components/Footer'
import {BrowserRouter as Router, Switch,Route} from 'react-router-dom';
import Home from './pages/Home'
import Login from './pages/Login';
import Register from './pages/Register';
import Collections from './pages/Collections'
import Course_Page from './pages/Courses-Page'
import Checkout from './pages/Checkout'
import Video from './pages/Video'
import PublicarCurso from './pages/Publicar'
import Perfil from './pages/Perfil'
import { Certificado } from './pages/Certificado';
import { Dashboard } from './pages/Dashboard';
function App() {
  return (
   <Router>    
        <Switch>
              <Route path='/' exact ><NavBar /><Home/><Footer/></Route>
              <Route path='/course/:id' exact><NavBar/><Course_Page/><Footer/></Route>
              <Route path='/login' exact ><NavBar/><Login/> <Footer/></Route>
              <Route path='/register' exact ><NavBar/><Register/> <Footer/></Route>
              <Route path='/perfil' exact ><NavBar/><Perfil/></Route>
              <Route path='/collections' exact ><NavBar /><Collections/> <Footer/></Route>
              <Route path='/video' exact ><Video/></Route>
              <Route path='/course' exact ><NavBar/><Course_Page/> <Footer/></Route>
              <Route path='/course/:id/:id_video' exact ><Video/></Route>
              <Route path='/certificado' exact ><NavBar/><Certificado/></Route>
              <Route path='/dashboard' exact ><Dashboard/></Route>
              {/* <Route path='/publicar' exact ><NavBar/><PublicarCurso/></Route> */}
              <Route path='/checkout' exact ><NavBar/><Checkout/> </Route>    
          </Switch>
   </Router>
  );
}

export default App;
