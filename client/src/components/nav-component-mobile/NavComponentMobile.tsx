'use client'
import c from "./NavComponentMobile.module.scss";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavComponentMobile() {
  const pathname = usePathname()
  const pathParts = pathname.split('/');
  const pathFirstString = pathParts.length > 1 ? '/' + pathParts[1] : '/';

  return (
    <>
      <nav className={c.nav}>
        <Link className={pathFirstString === '/' ? c.link + ' ' + c.active : c.link} href="/">
          Top rated
        </Link>
        <Link className={pathFirstString === '/search' ? `${c.link} ${c.notClickable} ${c.active}` : `${c.link} ${c.notClickable}`} href=''>
          Search
        </Link>
      </nav>
    </>
  )
}