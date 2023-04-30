import About from "./components/Account";
import Browse from "./components/Browse";
import { Footer } from "./components/Footer";
import Hero from "./components/Hero";
import ResponsiveAppBar from "./components/Navbar";
import { Portiofolio } from "./components/Portiofolio";
import Wallet from "./components/Wallet";
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Watchlist from './components/Watchlist'


function App() {
  return <>
    {/* <Router>
      <Fragment>
        <ResponsiveAppBar/>
        <Routes>
          <Route path="/">
              <Hero/>
          </Route>
        </Routes>
      </Fragment>
    </Router> */}
    
    <Router>
      <ResponsiveAppBar/>
      <Routes>
          <Route path="/" element={<Hero/>} />
          <Route path="/portifolio" element={<Portiofolio />} />
          <Route path="/watchlist" element={<Watchlist />} />
          <Route path="/explore" element={<Browse/>} />
          <Route path="/wallet" element={<Wallet />} />
      </Routes>
      <Footer/>
    </Router>
  </>
}

export default App;
