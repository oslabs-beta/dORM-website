import NavBar from './Navbar';
import Footer from './Footer';

const Layout = ({ children }) => {
  return (
    <div>
      <NavBar />
      <div className={'contentFooterContainer'}>
        <div className={'page-container'}>{children}</div>
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
