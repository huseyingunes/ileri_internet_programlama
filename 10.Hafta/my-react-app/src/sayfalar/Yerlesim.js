import { Outlet, Link } from "react-router-dom";

const Layout = () => {
    return (
      <>
        <nav>
          <ul>
            <li>
              <Link to="/">Ana Sayfa</Link>
            </li>
            <li>
              <Link to="/bizkimiz">Biz Kimiz</Link>
            </li>
            <li>
              <Link to="/bizkimiz/hg">Biz Kimiz Hg</Link>
            </li>
            <li>
              <Link to="/parametre/kisi=hg">Parametre Kisi Hg</Link>
            </li>
            <li>
              <Link to="/parametre/kisi/hg">Parametre Kişi / Hg</Link>
            </li>
            <li>
              <Link to="/parametre/palamut">Parametre Palamut</Link>
            </li>
            <li>
              <Link to="/iletisim">İletişim</Link>
            </li>
            <li>
              <Link to="/Css">Css</Link>
            </li>
          </ul>
        </nav>
        <hr />
        <Outlet />
      </>
    )
  };
  
  export default Layout;