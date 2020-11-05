import { Footer, Header, Menu } from '..';

const Layout = ({children}) => (
  <div className="mx-4 my-3">
    <Header />
    <Menu />
    {children}
    <Footer />
  </div>
);

export default Layout;