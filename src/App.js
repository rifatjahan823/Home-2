import logo from './logo.svg';
import './App.css';
import Hedaer from './Page/Header/Hedaer';
import { Route, Routes } from 'react-router-dom';
import Home from './Page/Home/Home';

function App() {
  return (
    <div>
      <Hedaer></Hedaer>
     <Routes>
      <Route path="/" element={<Home/>}/>
    </Routes>
    </div>
  );
}

export default App;
