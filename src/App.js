import { BrowserRouter as Router} from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import Approutes from './Approutes';





function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Approutes />
      <header className="App-header" style={{ backgroundImage: "url(/Images/pictureday.jpeg)", 
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center center" }}>
        
      </header>
    </div>
    </Router>
    
  );
}

export default App;
