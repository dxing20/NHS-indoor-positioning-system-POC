import Navbar from "./Navbar/Navbar";
import dxCSS from "../styles/dx.module.css";

const Layout = ({ children }) => {
  return (
    <div className={dxCSS.page}>
      <Navbar />
      {children}
    </div>
  );
};

export default Layout;
