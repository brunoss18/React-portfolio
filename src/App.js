import './style.css'
import Main from './components/main/main'
import Navbar from './components/navbar/Navbar';
import About from './components/about/about';

function App() {
  return (
    <div className="container">
      <Navbar/>
      <Main/>
     <About/>
    </div>
  );
}

export default App;
