import NavBar from './components/Navbar'
import Footer from './components/Footer'
import {BrowserRouter as Router, Switch,Route, Redirect} from 'react-router-dom';
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
import { DashDashboard } from './components/DashDashboard';
import { DashCategoria } from './pages/DashCategoria';
import { DashCursos } from './pages/DashCursos';
import { DashEstudiantes } from './pages/DashEstudiantes';
import { DashSuscripciones } from './pages/DashSuscripciones';
import { DashEditarEstudiante } from './pages/DashEditarEstudiante';
import { DashEditarCurso } from './pages/DashEditarCurso';
import { DashContenido } from './pages/DashContenido';
import { DashEditarSeccion } from './pages/DashEditarSeccion';
import { DashEditarLeccion } from './pages/DashEditarLeccion';
import { DashCertificado } from './pages/DashCertificado';
import { DashEditarCertificado } from './pages/DashEditarCertificado';
import { DashEditarCategoria } from './components/DashEditarCategoria/DashEditarCategoria';
import { DashProfesor } from './pages/DashProfesor';
import { DashEditarProfesor } from './pages/DashEditarProfesor';
import { DashAddCertificado } from './components/DashEditarCertificados/DashAddCertificado';
import { DashMostrarReportes } from './components/DashSuscripciones/DashMostrarReportes';
import { DashReportes } from './pages/DashReportes';
import { PurchaseMade } from './components/PurchaseMade';
import { Upload } from './components/Upload';
import { MisCursos } from './pages/MisCursos';
import {Provider} from './store/UseContextComment'
function App() {
  return (
   <Router>    
        <Switch> 
              <Route path='/' exact ><NavBar /><Home/><Footer/></Route>
              <Route path='/login' exact ><NavBar/><Login/> <Footer/></Route>
              <Route path='/register' exact ><NavBar/><Register/> <Footer/></Route>
              <Route path='/perfil' exact ><NavBar/><Perfil/></Route>
              <Route path='/collections' exact ><NavBar /><Collections/> <Footer/></Route>
             

              <Route path='/video' exact ><Video/>  </Route>
            

              <Route path='/course' exact ><NavBar/><Course_Page/> <Footer/></Route>
              <Route path='/course/:id' exact><NavBar/><Course_Page/><Footer/></Route>
              <Route path='/course/:id/:id_video' exact ><Video/></Route>
              <Route path='/certificados/:id' exact ><NavBar/><Certificado/></Route>
              <Route path='/purchasemade' exact ><PurchaseMade/></Route>
              <Route path='/uploadVideos' exact ><Upload/></Route>
              <Route path='/aprender' exact ><MisCursos/></Route>
              
              <Route path='/admin/dashboard' exact ><DashDashboard/></Route>

              <Route path='/admin/categorias' exact ><DashCategoria/></Route>
              <Route path='/admin/categorias/editar/:id' exact ><DashEditarCategoria/></Route>

              <Route path='/admin/profesor' exact ><DashProfesor/></Route>
              <Route path='/admin/profesor/editar/:id' exact ><DashEditarProfesor/></Route>

              <Route path='/admin/cursos' exact ><DashCursos/></Route>
              <Route path='/admin/cursos/editar/:id' exact ><DashEditarCurso/></Route>
              <Route path='/admin/cursos/contenido/:id' exact ><DashContenido/></Route>

              <Route path='/admin/modulo/editar/:id' exact ><DashEditarSeccion/></Route>

              <Route path='/admin/leccion/editar/:id' exact ><DashEditarLeccion/></Route>
              
              <Route path='/admin/certificados' exact ><DashCertificado/></Route>
              <Route path='/admin/certificados/editar/:id' exact ><DashEditarCertificado/></Route>
              <Route path='/admin/certificados/add' exact ><DashAddCertificado/></Route>

              <Route path='/admin/estudiantes' exact ><DashEstudiantes/></Route>
              <Route path='/admin/estudiante/editar/:id' exact ><DashEditarEstudiante/></Route>

              <Route path='/admin/suscripciones' exact ><DashSuscripciones/></Route>
              <Route path='/admin/suscripciones/:id' exact ><DashReportes/></Route>
              {/* <Route path='/publicar' exact ><NavBar/><PublicarCurso/></Route> */}
              <Route path='/checkout' exact ><NavBar/><Checkout/> </Route>    
               
              {/*Si en caso no encuentra la ruta muestra el home */}
              <Redirect to="/"/> 
          
          </Switch>
   </Router>
  
  );
}

export default App;
