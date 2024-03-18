import c from "./NavComponent.module.css";
import { Link, useLocation } from "@remix-run/react";

export default function NavComponent() {
  const { pathname } = useLocation();
  const pathParts = pathname.split('/');
  const pathFirstString = pathParts.length > 1 ? '/' + pathParts[1] : '/';

  return (
    <>
      <nav className={c.nav}>
        <Link className={pathFirstString === '/' ? c.link + ' ' + c.active : c.link} to="/">
          Top rated
        </Link>
        {/* <Link className={pathFirstString === '/cats' ? `${c.link} ${c.active}` : c.link} to='/cats'>
          Cats
        </Link> */}
        <Link to="search?name=remix">Search for remix</Link>
        <Link to="cat-profile/1">Cat profile</Link>
      </nav>
    </>
  )
}