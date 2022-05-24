import './App.css';
import {BrowserRouter as Router} from 'react-router-dom';
import MasterLayout from './layout/MasterLayout';
import Login from './page/Login';
import Header from './layout/Header';

function App() {
  return (
    <>
    <Header />
    <div className="App">
      <Router>
      <MasterLayout />
      </Router>
    </div>
    </>
  );
}

export default App;
