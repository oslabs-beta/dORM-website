import NavBar from './Navbar';
import Footer from './Footer';

const Layout = ({ children }) => {
  return (
    <div>
      <NavBar />
      <div className={'contentFooterContainer'}>
        {children}
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
