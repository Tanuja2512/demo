// import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Banner from './Banner.js'
import Music from './Music.js';
import Footer from './Footer.js';
import Headerleft from './Header_left';
import Headerleftbtm from './Header_left_btm.js';

function App() {
  return (
    <div className="App">
      <div className='Header_banner'>
      <Header/>
      <Banner/>
      <Music/>
      <Footer/>
      </div>
      {/* left side */}
      <div className='all_left_side'>
      <div className='Header_banner_left'>
      <Headerleft/>
      </div>
      <div className='Header_banner_left_btm'>
      <Headerleftbtm/>  
      </div>
      </div>
    </div>
  );
}

export default App;
