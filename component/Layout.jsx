import Home from '../pages';
import Footer from './Footer';
import Navbar from './Navbar';

function Layout({ childern }) {
  return (
    <>
      <Navbar />
      <Home />
      <Footer />
    </>
  );
}

export default Layout;
