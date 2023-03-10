import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
// import Hero from './Components/Hero';
// import Hero from './Pages/Hero';
// import Navbar from './Components/navbar';
// import Sponsor from './Pages/sponsor';
import Home from "./Pages/Home";
import About from './Pages/about'
import Plus from './Pages/Plus'
import School from './Pages/school'
import Contact from './Pages/contact'
import Login from './Pages/login'
import SignUp from './Pages/sign'
import Error from './Pages/Error'
import SharedLayout from "./Pages/SharedLayout";

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home/>}></Route>
        <Route path="about" element={<About />}></Route>
        <Route path="plus" element={<Plus />}></Route>
        <Route path="school" element={<School />}></Route>
        <Route path="contact" element={<Contact />}></Route>
        <Route path="login" element={<Login />}></Route>
        <Route path="sign" element={<SignUp />}></Route>
        <Route path="*" element={<Error />}></Route>
      </Route>
    </Routes>
  </BrowserRouter>
  );
}

export default App;

{/* <BrowserRouter>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />}></Route>
          <Route path="about" element={<About />}></Route>
          <Route path="plus" element={<Plus />}></Route>
          <Route path="school" element={<School />}></Route>
          <Route path="contact" element={<Contact />}></Route>
          <Route path="login" element={<Login />}></Route>
          <Route path="sign" element={<SignUp />}></Route>
          <Route path="*" element={<Error />}></Route>
        </Route>
      </Routes>
    </BrowserRouter> */}