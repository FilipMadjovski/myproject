import './App.css';
import Nav from './components/nav';
// import Breakfast from './components/breakfast';
import Footer from './components/footer';
import Login from './components/login';
import Createacc from './components/createacc';
import { Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <main id='main'>
      <Nav />
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/createacc' element={<Createacc />} />
      </Routes>
      <Footer />
    </main>
  );
};

export default App;
