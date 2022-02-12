import Header from "../ui/Header";
import Footer from "../ui/Footer";
import "./Layout.css";
const Layout = ({ children }) => {
  return (
    <div className="layout">
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
