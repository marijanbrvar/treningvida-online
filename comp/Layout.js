import Navbar from '../comp/Navbar'
import Footer from '../comp/Footer'

const Layout = ({children}) => {
  return ( 
    <div className="content">
      <Navbar />
      {children}
      <Footer />
    </div>
   );
}
 
export default Layout;