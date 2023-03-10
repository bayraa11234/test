import './styles/bootstrap.min.css';
import './styles/styles.css';
import Navbar from './components/Navbar';
// import DynamicModal from './components/utils/DynamicModal';
import { useEffect, useState } from 'react';
// import PostCreate from './components/Blogs/PostCreate';

import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Articles from './pages/Articles';
import Profile from './pages/Profile';
import Signin from './pages/Signin';
import SignInError from './pages/SignInError';
import Singup from './pages/Singup';
import SigninSuccess from './pages/SinginSuccess';
import Categories from './pages/Categories';
import Signout from './pages/Signout';

export default function App() {
  const [me, setMe] = useState(undefined);

  const [show, setShow] = useState(false);
  const [menuShow, setMenuShow] = useState(false);

  // const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    const myData = localStorage.getItem('me');
    if (myData !== 'undefined') {
      setMe(JSON.parse(myData));
    }160209
  }, []);

  if (!me) {
    return (
      <Routes>
        <Route path="/signin" element={<Signin />} />
        <Route path="/signin/success" element={<SigninSuccess setMe={setMe} />} />
        <Route path="/signup" element={<Singup />} />
        <Route path="*" element={<SignInError />} />
      </Routes>
    );
  }

  return (
    <>
      <Navbar onToggle={() => setMenuShow(!menuShow)} />
      <div className="main-wrapper">
        <div className={`off-menu bg-dark ${menuShow && 'show'}`}>Test</div>
        <div className="off-menu-sibling">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/articles" element={<Articles handleShow={handleShow} />} />
            <Route path="/profile" element={<Profile handleShow={handleShow} />} />
            <Route path="/signout" element={<Signout/>} />
            <Route path="/categories" element={<Categories handleShow={handleShow}/>} />
          </Routes>
        </div>
      </div>

      {/* <DynamicModal show={show} handleClose={handleClose} title="Create post" content={<PostCreate />} /> */}
    </>
  );
}
