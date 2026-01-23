
import '../styles/Layout.css';

// eslint-disable-next-line react/prop-types
const Layout = ({ children }) => {
  return (
    <div className="layout-grid">
      {/* Grid background */}
      <div className="grid-lines"></div>
      
      {/* Content */}
      <div className="layout-content">
        {children}
      </div>
    </div>
  );
};

export default Layout;