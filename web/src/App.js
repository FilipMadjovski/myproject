import './App.css';
import { Routes, Route } from 'react-router-dom';
import Nav from './components/nav';
// import Breakfast from './components/breakfast';
import Footer from './components/footer';
import Login from './components/login';
import Createacc from './components/createacc';
import MyProfile from './components/myprofile';

const App = () => {
  return (
    <main id='main'>
      <Nav />
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/createacc' element={<Createacc />} />
        <Route path='/myprofile' element={<MyProfile />} />
      </Routes>
      <Footer />
    </main>
  );
};

export default App;
