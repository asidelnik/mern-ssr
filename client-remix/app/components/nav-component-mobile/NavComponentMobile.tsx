// import { useLocation } from "@remix-run/react";
import c from "./NavComponentMobile.module.css";

export default function NavComponentMobile() {
  // const { pathname } = useLocation();
  // const pathParts = pathname.split('/');
  // const pathFirstString = pathParts.length > 1 ? '/' + pathParts[1] : '/';

  return (
    <>
      <nav className="nav">
        <link href="/favicon.ico" rel="icon" className={c.link} />
        {/* <Link className={pathFirstString === '/' ? c.link + ' ' + c.active : c.link} href="/">
          Top rated
        </Link>
        <Link className={pathFirstString === '/search' ? `${c.link} ${c.notClickable} ${c.active}` : `${c.link} ${c.notClickable}`} href=''>
          Search
        </Link> */}
      </nav>
    </>
  )
}