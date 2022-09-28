import './App.css';
import Nav from './components/nav';
// import Breakfast from './components/breakfast';
import Footer from './components/footer';
import Login from './components/login';
import { Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <main id='main'>
      <Nav />
      {/* <Breakfast /> */}
        <Routes>
          <Route path='/login' element={<Login />} />
        </Routes>
      {/* <Login /> */}
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <Footer />
    </main>
  );
};

export default App;
