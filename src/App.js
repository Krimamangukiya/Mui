import './App.css';
import Header from './Componet/Header';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Main from './Componet/Main';
import About from './Componet/About';
import Service from './Componet/Servise';
import Featires from './Componet/Featires';
import Pricing from './Componet/Pricing';
import Footer from './Componet/Footer';
import Contact from './Componet/Contact';
function App() {


  return (
    <>

      <Router>
        <Header />
        <Switch>
          <Route exact path='/'>
            <Main />
          </Route>
          <Route path='/about'>
            <About />
            {/* {console.log('Call')} */}
          </Route>
          <Route path='/SERICES'>
            <Service />
          </Route>
          <Route path='/FEATURES'>
            <Featires />
          </Route>
          <Route path='/PRICING'>
            <Pricing />
          </Route>
          <Route path='/CONTACT'>
            <Contact />
          </Route>

        </Switch>

        <Footer />
      </Router>
    </>
  );
}

export default App;
